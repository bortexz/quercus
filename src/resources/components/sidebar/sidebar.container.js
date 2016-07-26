import { connect } from 'react-redux'
import { getFiles } from '../../actions/content'
import SideBar from './sidebar.jsx'

const stateToProps = (state) => {
  return {
    items: state.sidebarItems
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onItemClick: (path) => {
      dispatch(getFiles(path))
    }
  }
}

const SidebarContainer = connect(
  stateToProps,
  dispatchToProps
)(SideBar)

export default SidebarContainer
