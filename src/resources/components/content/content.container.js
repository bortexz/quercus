import {connect} from 'react-redux'
import Content from './content.jsx'

import {selectFiles, getFiles} from '../../actions/content'

const stateProps = (state) => {
  return {
    files: state.files,
    directory: state.directory,
    selected: state.selected
  }
}

const dispatchToProps = (dispatch) => {
  return {
    selectItems: (items) => {
      dispatch(selectFiles(items))
    },
    gotoDirectory: (path) => {
      dispatch(getFiles(path))
    }
  }
}

const ContentContainer = connect(
  stateProps,
  dispatchToProps
)(Content)

export default ContentContainer
