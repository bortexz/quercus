// entry.js
import React from 'react'

// import bulma styles and other styles
import 'bulma/bulma.sass'
import '../../styles/app.scss'

import SidebarContainer from '../sidebar/sidebar.container'
import ContentContainer from '../content/content.container'
import ErrorsContainer from '../errors/errors.container'
import NavbarContainer from '../navbar/navbar.container'

class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <NavbarContainer />
        <div id='main-container'>
          <SidebarContainer />
          <ContentContainer />
          <ErrorsContainer />
        </div>
      </div>
    )
  }
}

export default App
