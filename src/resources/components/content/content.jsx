import React, {PropTypes} from 'react'

class SideBar extends React.Component {
  render () {
    return (
      <div>
        {this.props.path}
      </div>
    )
  }
}

SideBar.propTypes = {
  path: PropTypes.string.isRequired
}

export default SideBar
