import { connect } from 'react-redux'
import { loadPath } from '../../actions/content'
import SideBar from './sidebar.jsx'

const stateToProps = (state) => {
  return {
    state: state
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onItemClick: (path) => {
      dispatch(loadPath(path))
    }
  }
}

const SidebarVisible = connect(
  stateToProps,
  dispatchToProps
)(SideBar)

export default SidebarVisible