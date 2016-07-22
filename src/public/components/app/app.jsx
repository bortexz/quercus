// entry.js
import React from 'react'
import ReactDOM from 'react-dom'

import {SideBar} from '../sidebar/sidebar.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <SideBar />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('react-root'))
