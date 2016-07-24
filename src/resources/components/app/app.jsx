// entry.js
import React from 'react'

import SidebarVisible from '../sidebar/sidebar.container'
import ContentVisible from '../content/content.container'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <SidebarVisible />
        <ContentVisible />
      </div>
    )
  }
}

export default App
