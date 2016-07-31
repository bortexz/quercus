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
      <div id='app'
        onFocus={() => this.onFocus()}
        tabIndex='1'
        ref={elm => this.refer(elm)}>
        <NavbarContainer />
        <div id='main-container'>
          <SidebarContainer />
          <ContentContainer />
          <ErrorsContainer />
        </div>
      </div>
    )
  }

  // TODO: Any way to do this more efficiently ?
  // It's called several times each time something's clicked
  onFocus () {
    if (document.activeElement === this._element) {
      document.getElementsByName('content-filter')[0].focus()
    }
  }

  refer (element) {
    if (element) this._element = element
  }
}

export default App
