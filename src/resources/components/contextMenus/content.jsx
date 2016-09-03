import React from 'react'
import { ContextMenu, MenuItem, connect } from 'react-contextmenu'
import * as path from 'path'

import { moveToTrash } from '~/system/trash'
import { copyFiles } from '~/system/clipboard'

class ContentContextMenu extends React.Component {
  render () {
    // Sometimes this is called without being the contextmenu open
    let props = this.props.item
    return (
      <ContextMenu identifier={'contentContextMenu'}>
        <MenuItem onClick={this.nop} disabled> FOLDER
        </MenuItem>
        <MenuItem onClick={this.handleCopy} data={props}>
          <i className='fa fa-copy'></i> <span>FolderS</span>
        </MenuItem>
        <MenuItem onClick={this.handleMoveToTrash} data={props}>
          <i className='fa fa-trash-o'></i> <span>FolderT</span>
        </MenuItem>
      </ContextMenu>
    )
  }

  getCMName (props) {
    if (Object.keys(props).length !== 0) {
      if (props.selectedList.indexOf(props.file.name) !== -1) {
        if (props.selectedList.size !== 1) {
          return `${props.selectedList.size} Items`
        } else {
          return props.file.name
        }
      } else {
        return props.file.name
      }
    }
    return null
  }

  handleCopy (e, props) {
    if (props.selectedList.indexOf(props.file.name) !== -1) {
      let files = props.selectedList.map(file => path.join(props.current, file)).toArray()
      copyFiles(files)
    } else {
      let file = path.join(props.current, props.file.name)
      copyFiles(file)
    }
  }

  handleMoveToTrash (e, props) {
    if (props.selectedList.indexOf(props.file.name) !== -1) {
      let files = props.selectedList.map(file => path.join(props.current, file)).toArray()
      moveToTrash(files)
    } else {
      let file = path.join(props.current, props.file.name)
      moveToTrash(file)
    }
  }

  // react-contextmenu complains about not specifying onClick method.
  // NOP for disabled name method
  nop () {}
}

export default connect(ContentContextMenu)
