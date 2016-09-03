import React, {Component} from 'react'

import FileContextMenu from './file.jsx'
import ContentContextMenu from './content.jsx'

class ContextMenus extends Component {
  render () {
    return (
      <div>
        <ContentContextMenu />
        <FileContextMenu />
      </div>
    )
  }
}

export default ContextMenus
