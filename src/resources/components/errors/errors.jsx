import React, {PropTypes} from 'react'
import IPropTypes from 'react-immutable-proptypes'

class Errors extends React.Component {
  render () {
    return (
      <div id='errors'>
        {this.props.errors.map((item, index) =>
          <div key='index' className='notification is-danger'>
            <button className='delete' onClick={() => this.props.removeError(index)}></button>
              {item.error}
          </div>
        )}
      </div>
    )
  }

  static propTypes () {
    return {
      removeError: PropTypes.func.isRequired,
      errors: IPropTypes.listOf(PropTypes.shape({
        error: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }).isRequired).isRequired
    }
  }
}

export default Errors
