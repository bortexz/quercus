import { connect } from 'react-redux'
import { removeError } from '../../actions/errors'
import Errors from './errors.jsx'

const stateToProps = (state) => {
  return {
    errors: state.errors
  }
}

const dispatchToProps = (dispatch) => {
  return {
    removeError: (index) => {
      dispatch(removeError(index))
    }
  }
}

const ErrorsContainer = connect(
  stateToProps,
  dispatchToProps
)(Errors)

export default ErrorsContainer
