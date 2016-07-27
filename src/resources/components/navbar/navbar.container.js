import Navbar from './navbar.jsx'
import {connect} from 'react-redux'

import {toggleHidden} from '../../actions/options'
import {getFiles} from '../../actions/content'

const stateProps = (state) => {
  return {
    directory: state.directory,
    options: state.options,
    navigation: state.navigation
  }
}

const dispatchProps = (dispatch) => {
  return {
    toggleHidden: () => dispatch(toggleHidden()),
    getFiles: (path, arrows = false) => dispatch(getFiles(path, arrows))
  }
}

const NavbarContainer = connect(
  stateProps,
  dispatchProps
)(Navbar)

export default NavbarContainer
