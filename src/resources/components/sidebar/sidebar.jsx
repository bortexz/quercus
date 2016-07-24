import React, {PropTypes} from 'react'
import './sidebar.scss'

class SideBar extends React.Component {
  render () {
    return (
      <div className='sideBar'>
        <ul>
          <li onClick={() => this.props.onItemClick('/Users/')}>Users</li>
          <li onClick={() => this.props.onItemClick('/Applications/')}>Applications</li>
        </ul>
      </div>
    )
  }
}

SideBar.propTypes = {
  onItemClick: PropTypes.func.isRequired
}

export default SideBar
