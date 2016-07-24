import {connect} from 'react-redux'
import Content from './content.jsx'

const stateProps = (state) => {
  return {
    path: state ? state.path : null
  }
}

const ContentVisible = connect(
  stateProps
)(Content)

export default ContentVisible
