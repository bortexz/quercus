import React from 'react'
import { ContextMenu, MenuItem, connect } from 'react-contextmenu'

class FileContextMenu extends React.Component {
  render () {
    let {file} = this.props.item
    return (
      <ContextMenu identifier={'fileContextMenu'}>
        <MenuItem onClick={this.handleClick} data={{item: 'copy'}} disabled> {file ? file.name : undefined}
        </MenuItem>
        <MenuItem onClick={this.handleClick} data={{item: 'copy'}}> Copy
        </MenuItem>
        <MenuItem onClick={this.handleClick} data={{item: 'cut'}}> Cut
        </MenuItem>
        <MenuItem onClick={this.handleClick} data={{item: 'trash'}}> Move to trash

        </MenuItem>
      </ContextMenu>
    )
  }

  handleClick (e, data) {
  }
}

export default connect(FileContextMenu)
