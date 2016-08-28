import React, {PropTypes} from 'react'
import IPropTypes from 'react-immutable-proptypes'
// Child components
import NavbarLeft from './partials/navbar-left.jsx'
import NavbarCenter from './partials/navbar-center.jsx'

class Navbar extends React.Component {
  render () {
    return (
      <div id='navbar' className='nav'>
        <NavbarLeft {...this.props} />
        <NavbarCenter
          current={this.props.navigation.get('current')}
          getFiles={this.props.getFiles} />

        <div className='nav-right'>
          <a className='nav-item'>
            <span>
              Somethin' will be here
            </span>
          </a>
        </div>
      </div>
    )
  }

  static propTypes () {
    return {
      options: IPropTypes.map.isRequired,
      navigation: IPropTypes.isMapOf(PropTypes.shape({
        current: PropTypes.string,
        back: IPropTypes.stack.isRequired,
        forward: IPropTypes.stack.isRequired
      })),
      getFiles: PropTypes.func.isRequired
    }
  }
}

export default Navbar
