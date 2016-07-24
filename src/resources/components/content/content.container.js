import {connect} from 'react-redux'
import Content from './content.jsx'

const stateProps = (state = {path: '/'}) => {
  return {
    path: state.path
  }
}

const ContentVisible = connect(
  stateProps
)(Content)

export default ContentVisible
