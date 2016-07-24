import React from 'react'
import './sidebar.scss'

export class SideBar extends React.Component {
  render() {
    return (
      <div>
        {this.props.path}
      </div>
    )
  }
}
