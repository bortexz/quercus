import {connect} from 'react-redux'
import Content from './content.jsx'

import {selectFiles, getFiles} from '../../actions/content'

// Takes the state and return the files filtered
function _filterFiles (state) {
  let files = state.files
  if (!state.options.get('hidden')) {
    files = files.filter(file =>
      !(file.name.indexOf('.') === 0))
  }
  return files
}

const stateProps = (state) => {
  return {
    files: _filterFiles(state),
    directory: state.directory,
    selected: state.selected
  }
}

const dispatchToProps = (dispatch) => {
  return {
    selectItems: items => dispatch(selectFiles(items)),
    gotoDirectory: path => dispatch(getFiles(path))
  }
}

const ContentContainer = connect(
  stateProps,
  dispatchToProps
)(Content)

export default ContentContainer
