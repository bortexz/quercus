import React from 'react'
import ReactDOM from 'react-dom'
import {List} from 'immutable'

import { SelectableGroup, createSelectable } from 'react-selectable'
import { mouseTrap } from 'react-mousetrap'

import { unionStringLists } from '../../../utils/immutable'
import { ContextMenuLayer } from 'react-contextmenu'

import path from 'path'
import {openFile} from '../../../system/files'

// Make a context menu of the item
import Item from './item.jsx'
let ContextMenuItem = ContextMenuLayer('fileContextMenu', (props) => ({
  file: props.file,
  selectedList: props.selectedList,
  current: props.current
}))(Item)

// Make it selectable
let SelectableItem = createSelectable(ContextMenuItem)

/*
  High order component to encapsulate all the selectable logic of the item list
*/
class ItemList extends React.Component {

  constructor (props) {
    super(props)
    this._children = []
  }

  render () {
    return (
      <SelectableGroup
        id='content-list'
        onSelection={this.handleSelection.bind(this)}
        fixedPosition={Boolean(true)}
        selectOnMouseMove={Boolean(true)}
        component='ul'
        preventDefault={Boolean(false)}

        onContextMenu={this.shouldStopPropagation.bind(this)}

        onMouseDown={this.handleOutsideClick.bind(this)}

        >
        {this.props.files.map(file => (
          <SelectableItem
            selectableKey={file.name}
            file={file}
            key={file.name}
            ref={this.referenceChild.bind(this)}
            selected={this.props.selected.indexOf(file.name) !== -1}

            /* handlers */
            onClick={(e) => this.selectItem(e, file.name)}
            onMouseDown={(e) => e.stopPropagation()}
            onDoubleClick={() => this.doubleClick(file)}

            /* context menu info */
            selectedList={this.props.selected}
            current={this.props.current}
            /* context menu action events */

            onMovedToTrash={this.props.movedToTrash}
            onCopied={this.props.copiedToClipboard}
          />
        ))
        }
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

  // Item simple event handlers
  // Select
  selectItem (e, filename) {
    e.stopPropagation()
    this.props.selectItems(List([filename]))
  }

  doubleClick (file) {
    let fullpath = path.join(this.props.current, file.name)
    if (file.isDirectory) {
      this.props.gotoDirectory(fullpath)
    } else {
      openFile(fullpath)
    }
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

  // If the context menu event was fired inside an element,
  // stop propagation of it to get item context menu instead of
  // content context menu
  shouldStopPropagation (e) {
    if (this._eventInsideItem(e)) e.stopPropagation()
  }

  _eventInsideItem (e) {
    let x = e.clientX
    let y = e.clientY
    for (let i = 0; i < this._children.length; ++i) {
      let child = this._children[i]
      let rect = child.node.getBoundingClientRect()
      if (rect.top > y) return false // Soon stoping

      if (rect.top < y && (rect.top + rect.height) > y) {
        if (rect.left < x && (rect.left + rect.width) > x) return true
      }
    }

    return false
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

// Context menu of the folder
export default ContextMenuLayer('contentContextMenu', (props) => ({
  currentDir: props.current
}))(mouseTrap(ItemList))

