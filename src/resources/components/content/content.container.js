import {connect} from 'react-redux'
import Content from './content.jsx'

const stateProps = (state) => {
  return {
    files: state.files
  }
}

const ContentContainer = connect(
  stateProps
)(Content)

export default ContentContainer
