import React from 'react'
import { ContextMenu, MenuItem, connect } from 'react-contextmenu'
// import * as path from 'path'

import { pasteFiles } from '~/system/clipboard'

class ContentContextMenu extends React.Component {
  render () {
    // Sometimes this is called without being the contextmenu open
    let props = this.props.item
    return (
      <ContextMenu identifier={'contentContextMenu'}>
        <MenuItem onClick={this.nop} disabled> This folder
        </MenuItem>
        <MenuItem onClick={this.handlePaste} data={props}>
          <i className='fa fa-paste'></i> <span>Paste</span>
        </MenuItem>
        <MenuItem onClick={this.nop} data={props}>
          <i className='fa fa-scissors'></i> <span>Paste and delete source </span>
        </MenuItem>
        <MenuItem onClick={this.nop} data={props}>
          <i className='fa fa-folder-open'></i> <span>New folder </span>
        </MenuItem>
      </ContextMenu>
    )
  }

  handlePaste (e, props) {
    pasteFiles(props.currentDir, false)
  }

  // react-contextmenu complains about not specifying onClick method.
  // NOP for disabled name method
  nop () {}
}

export default connect(ContentContextMenu)
