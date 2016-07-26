// entry.js
import React from 'react'

// import bulma styles and other styles
import 'bulma/bulma.sass'
import '../../styles/app.scss'

import SidebarContainer from '../sidebar/sidebar.container'
import ContentContainer from '../content/content.container'
import ErrorsContainer from '../errors/errors.container'

class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <SidebarContainer />
        <ContentContainer />
        <ErrorsContainer />
      </div>
    )
  }
}

export default App
