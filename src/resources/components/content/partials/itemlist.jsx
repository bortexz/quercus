import React from 'react'
import {List} from 'immutable'
import path from 'path'
// TODO: Replace by the npm one once updated and e.preventDefault() changed https://github.com/unclecheese/react-selectable/issues/15
import { SelectableGroup, createSelectable } from 'react-selectable'

import {openFile} from '../../../system/files'

import Item from './item.jsx'

let SelectableItem = createSelectable(Item)

class ItemList extends React.Component {
  render () {
    return (
      <SelectableGroup
        onSelection={this.handleSelection.bind(this)}
        fixedPosition={Boolean(true)}
        selectOnMouseMove={Boolean(true)}
        component='ul'
        preventDefault={Boolean(false)}
        id='content-list'>
      {this.props.files.map(file =>
        <SelectableItem
          selectableKey={file.name}
          file={file}
          key={file.name}
          onClick={(e) => this.selectItem(e, file.name)}
          onMouseDown={(e) => e.stopPropagation()}
          onDoubleClick={() => this.doubleClick(file)}
          selected={this.props.selected.indexOf(file.name) !== -1}
          />
      )}
      </SelectableGroup>
    )
  }

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

  handleSelection (args) {
    this.props.selectItems(List(args))
  }
}

export default ItemList

