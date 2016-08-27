import React from 'react'
import ReactDOM from 'react-dom'
import {List} from 'immutable'

import { SelectableGroup, createSelectable } from 'react-selectable'
import { mouseTrap } from 'react-mousetrap'

import { unionStringLists } from '~/utils/immutable'
/*
  High order component to encapsulate all the selectable logic of the item list
*/
class SelectableItemList extends React.Component {

  constructor (props) {
    super(props)
    this._children = []
  }

  render () {
    // Trick to get refs of dynamic children. This ref will be used for selection properties,
    // so it's better to have it here
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        ref: this.referenceChild.bind(this)
      })
    })
    return (
      <SelectableGroup
        onSelection={this.handleSelection.bind(this)}
        fixedPosition={Boolean(true)}
        selectOnMouseMove={Boolean(true)}
        component='ul'
        preventDefault={Boolean(false)}

        onMouseDown={this.handleOutsideClick.bind(this)}
        id={this.props.id}
      >
        {children}
      </SelectableGroup>
    )
  }

  // Lifecycle methods
  componentWillMount () {
    // Keyboard selection bindings
    let directions = ['up', 'down', 'left', 'right']
    directions.forEach(dir => this.props.bindShortcut(dir, () => this._selectSingleDirection(dir)))
    directions.forEach(dir => this.props.bindShortcut(`shift+${dir}`, () => this._selectMultipleDirection(dir)))
  }

  componentWillReceiveProps (newProps) {

  }

  // Child ref callback
  referenceChild (comp) {
    if (!comp) {
      this._children = []
      return
    }
    let child = {
      file: comp.props.file,
      node: ReactDOM.findDOMNode(comp)
    }
    this._children.push(child)
  }

  // Handlers of selection and outside click
  handleSelection (args, e) {
    if (e && e.shiftKey) {
      this.props.selectItems(unionStringLists(this.props.selected, args))
      return
    }
    this.props.selectItems(List(args))
  }

  handleOutsideClick (e) {
    if (e.shiftKey) {
      return
    }
    this.props.selectItems(List())
  }

  // Functions to select by keyboard events
  _getPositionsMatrix () {
    let leftPos = {}
    let topPos = {}
    this._children.forEach(child => {
      let rect = child.node.getBoundingClientRect()
      leftPos[rect.left] = undefined
      topPos[rect.top] = undefined
      child.rect = rect // Save values for later
    })

    let sorter = (a, b) => a - b
    leftPos = Object.keys(leftPos).map(pos => parseInt(pos)).sort(sorter)
    topPos = Object.keys(topPos).map(pos => parseInt(pos)).sort(sorter)

    let posMatrix = []
    // Give size to matrix, order with null
    Object.keys(topPos).forEach(top => posMatrix.push(Object.keys(leftPos).map(key => null)))

    // Fill matrix
    posMatrix.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        posMatrix[rowIndex][colIndex] = this._children.find(child => {
          return topPos[rowIndex] === Math.floor(child.rect.top) &&
            leftPos[colIndex] === Math.floor(child.rect.left)
        })
      })
    })

    return posMatrix
  }

  /**
   * Get the item in the direction specified along the position in the Matrix
   */
  _getDirectionalElement (matrix, node, dir) {
    let row = dir === 'up' ? -1 : dir === 'down' ? 1 : 0
    let column = dir === 'left' ? -1 : dir === 'right' ? 1 : 0

    let newRow = matrix[node.rowIndex + row]
    if (!newRow) return
    return newRow[node.columnIndex + column]
  }

  /**
   * Returns an object with the current element and it's position in the matrix
   */
  _getCurrentLastElemWithPosition (matrix, selected) {
    let currentLastElem
    matrix.some((row, rowIndex) =>
      row.some((elem, columnIndex) => {
        if (elem && elem.file.name === selected.last()) {
          currentLastElem = {
            rowIndex,
            columnIndex,
            elem
          }
          return true
        }
        return false
      }, this)
    , this)
    return currentLastElem
  }

  _selectSingleDirection (dir) {
    if (this.props.selected.size === 0) return

    let matrix = this._getPositionsMatrix()
    let lastElem = this._getCurrentLastElemWithPosition(matrix, this.props.selected)

    let nextSelection = this._getDirectionalElement(matrix, lastElem, dir)
    if (!nextSelection) {
      this.props.selectItems(List([lastElem.elem.file.name]))
      return
    }
    this.props.selectItems(List([nextSelection.file.name]))
  }

  _selectMultipleDirection (dir) {
    if (this.props.selected.length === 0) return
  }
}

export function createSelectableItem (item) {
  // We return the react-selectable function to create a Selectable Item.
  return createSelectable(item)
}

export default mouseTrap(SelectableItemList)
