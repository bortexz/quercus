import React from 'react'
import {List} from 'immutable'
import path from 'path'
import SelectableItemList, { createSelectableItem } from './itemlist.selectable.jsx'

import {ContextMenuLayer} from 'react-contextmenu'

import {openFile} from '../../../system/files'

import Item from './item.jsx'

let ContextMenuItem = ContextMenuLayer('fileContextMenu', props => ({
  file: props.file
}))(Item)
let SelectableItem = createSelectableItem(ContextMenuItem)

class ItemList extends React.Component {
  render () {
    return (
      <SelectableItemList
        id='content-list'
        domItemsArray={this._domItemsArray}
        {...this.props}>
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

      </SelectableItemList>
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
}

export default ItemList

