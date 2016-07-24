import React, {PropTypes} from 'react'
import './sidebar.scss'

class SideBar extends React.Component {
  render () {
    return (
      <div className='sideBar'>
        <ul>
          {this.props.items.map(item =>
            <li onClick={() => this.props.onItemClick(item.path)}
            key={item.path}>{item.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

SideBar.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default SideBar
