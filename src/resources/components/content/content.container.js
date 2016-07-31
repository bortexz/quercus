import {connect} from 'react-redux'
import Content from './content.jsx'

import minimatch from 'minimatch'

import {selectFiles, getFiles} from '../../actions/content'
import {applyFilter} from '../../actions/options'

// Takes the state and return the files filtered
// TODO: Move to selectors https://github.com/reactjs/reselect
function _filterFiles (state) {
  // Hidden/Visible
  let files = state.files
  if (!state.options.get('hidden')) {
    files = files.filter(file =>
      !(file.name.indexOf('.') === 0))
  }

  // Filter
  let filter = state.options.get('filter')
  // Apply * glob automatically if not found
  if (filter.indexOf('*') === -1) filter = filter.concat('*')
  if (filter !== '') {
    files = files.filter(file =>
      minimatch(file.name, filter))
  }
  return files
}

const stateProps = (state) => {
  return {
    files: _filterFiles(state),
    current: state.navigation.get('current'),
    selected: state.selected
  }
}

const dispatchToProps = (dispatch) => {
  return {
    selectItems: items => dispatch(selectFiles(items)),
    gotoDirectory: path => dispatch(getFiles(path)),
    applyFilter: glob => dispatch(applyFilter(glob))
  }
}

const ContentContainer = connect(
  stateProps,
  dispatchToProps
)(Content)

export default ContentContainer
