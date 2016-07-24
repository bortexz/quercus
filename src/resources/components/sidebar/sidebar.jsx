import React from 'react'
import './sidebar.scss'

export class SideBar extends React.Component {
  render() {
    return (
      <div className='sideBar'>
        <ul>
          <li>Item1</li>
          <li>Item2</li>
        </ul>
      </div>
    )
  }
}
