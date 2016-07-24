// entry.js
import {Component} from 'react'
import ReactDOM from 'react-dom'

import {SideBar} from '../sidebar/sidebar.jsx'
import {Content} from '../content/content.container.jsx'

export class App extends Component {
  render () {
    return (
      <div>
        <SideBar />
      </div>
    )
  }
}
