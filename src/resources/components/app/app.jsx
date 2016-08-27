// entry.js
import React from 'react'
import ReactDOM from 'react-dom'

// import bulma styles and other styles
import 'bulma/bulma.sass'
import '../../styles/app.scss'

import SidebarContainer from '../sidebar/sidebar.container'
import ContentContainer from '../content/content.container'
import ErrorsContainer from '../errors/errors.container'
import NavbarContainer from '../navbar/navbar.container'

import {mouseTrap} from 'react-mousetrap'

class App extends React.Component {
  render () {
    return (
      <div id='app'
        tabIndex='1'
        >
        <NavbarContainer />
        <div id='main-container'>
          <SidebarContainer />
          <ContentContainer />
          <ErrorsContainer />
        </div>
      </div>
    )
  }

  componentDidMount () {
    // prevent text of folders from being selected
    this._preventTextSelection()
  }

  componentWillMount () {
    // Handle shortcuts
    this._activateFilterBindings()
  }

  _preventTextSelection () {
    ReactDOM.findDOMNode(this).addEventListener('mousemove', (e) => {
      e.stopPropagation()
      e.preventDefault()
      if (document.selection) {
        document.selection.empty()
      } else {
        window.getSelection().removeAllRanges()
      }
      return false
    })
  }

  _activateFilterBindings () {
    const filterActivators = 'qwertyuioplkjhgfdsazxcvbnmñQWERTYUIOPLKJHGFDSAZXCVBNMÑ.,-_1234567890'
    var i = filterActivators.length
    while (i--) {
      let letter = filterActivators[i]
      this.props.bindShortcut(letter, (e) => this._activateFilter(letter))
    }
  }

  _activateFilter (val) {
    let filterElem = document.getElementsByName('content-filter')[0]
    filterElem.focus()
  }
}

export default mouseTrap(App)
