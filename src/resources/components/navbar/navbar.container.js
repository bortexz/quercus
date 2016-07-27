import Navbar from './navbar.jsx'
import {connect} from 'react-redux'

import {toggleHidden} from '../../actions/options'

const stateProps = (state) => {
  return {
    directory: state.directory,
    options: state.options
  }
}

const dispatchProps = (dispatch) => {
  return {
    toggleHidden: () => dispatch(toggleHidden())
  }
}


const NavbarContainer = connect(
  stateProps,
  dispatchProps
)(Navbar)

export default NavbarContainer
