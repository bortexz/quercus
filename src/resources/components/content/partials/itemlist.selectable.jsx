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
        id={this.props.id}>
        {children}
      </SelectableGroup>
    )
  }

  // Lifecycle methods
  componentWillMount () {
    // Keyboard selection bindings
    let directions = ['up', 'down', 'left', 'right']
    directions.forEach(dir => this.props.bindShortcut(dir, () => this._selectSingleDirectional(dir)))
    directions.forEach(dir => this.props.bindShortcut(`shift+${dir}`, () => this._selectMultipleDirectional(dir)))
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

  // TODO: Move the following logic to different file, as most of it is stateless?
  // (except event handlers)

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
    let elem = {
      rowIndex: node.rowIndex + row,
      columnIndex: node.columnIndex + column,
      elem: newRow[node.columnIndex + column]
    }
    return newRow[node.columnIndex + column] ? elem : undefined
  }

  /**
   * Return an array of elements between the two specified, both included, and in
   * same order as the matrix
   */
  _getElementsBetween (matrix, node1, node2) {
    if (node2.rowIndex < node1.rowIndex ||
        (node2.rowIndex === node1.rowIndex && node2.columnIndex < node1.columnIndex)) {
      [node1, node2] = [node2, node1]
    }
    let arr = []
    for (let i = node1.rowIndex; i <= node2.rowIndex; i++) {
      let j = node1.rowIndex === i ? node1.columnIndex : 0
      let jMax = node2.rowIndex === i ? node2.columnIndex : matrix[0].length - 1
      for (; j <= jMax; j++) {
        let elem = matrix[i][j]
        if (elem) arr.push(elem)
      }
    }
    return arr
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
    , this) // Quite annoying that these functions don't let 'this' to pass automatically
    return currentLastElem
  }

  // Just arrow key pressed
  _selectSingleDirectional (dir) {
    if (this.props.selected.size === 0) return

    let matrix = this._getPositionsMatrix()
    let lastElem = this._getCurrentLastElemWithPosition(matrix, this.props.selected)

    let nextSelection = this._getDirectionalElement(matrix, lastElem, dir)
    if (!nextSelection) {
      this.props.selectItems(List([lastElem.elem.file.name]))
      return
    }
    this.props.selectItems(List([nextSelection.elem.file.name]))
  }

  // When shift+arrowkey is pressed
  _selectMultipleDirectional (dir) {
    if (this.props.selected.length === 0) return

    let matrix = this._getPositionsMatrix()
    let lastElem = this._getCurrentLastElemWithPosition(matrix, this.props.selected)

    let nextSelection = this._getDirectionalElement(matrix, lastElem, dir)

    if (!nextSelection) {
      return
    }
    let elementsBetween = this._getElementsBetween(matrix, lastElem, nextSelection)
    elementsBetween.splice(elementsBetween.findIndex(elem => elem.file.name === nextSelection.elem.file.name), 1)
    let newList
    if (this.props.selected.indexOf(nextSelection.elem.file.name) !== -1) {
      newList = this._removeFromSelection(this.props.selected,
        elementsBetween.map(elem => elem.file.name),
        nextSelection.elem.file.name)
    } else {
      newList = this._addToSelection(this.props.selected,
        elementsBetween.map(elem => elem.file.name),
        nextSelection.elem.file.name)
    }

    this.props.selectItems(newList)
  }

  _addToSelection (selected, newElems, nextSelection) {
    return selected.concat(newElems).toSet().toList().concat(nextSelection) // Trick to do unique over a list
  }

  _removeFromSelection (selected, newElems, nextSelection) {
    for (let i = selected.size; i >= 0; i--) {
      if (newElems.indexOf(selected.get(i)) !== -1) {
        selected = selected.delete(i)
      }
    }
    return selected.concat(nextSelection)
  }
}

export function createSelectableItem (item) {
  // We return the react-selectable function to create a Selectable Item.
  return createSelectable(item)
}

export default mouseTrap(SelectableItemList)
