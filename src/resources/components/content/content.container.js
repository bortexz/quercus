import {connect} from 'react-redux'
import Content from './content.jsx'

const stateProps = (state) => {
  return {
    path: state.path
  }
}

const ContentVisible = connect(
  stateProps
)(Content)

export default ContentVisible
