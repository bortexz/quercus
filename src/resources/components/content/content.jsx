import React, {PropTypes} from 'react'

class Content extends React.Component {
  render () {
    return (
      <div>
        {this.props.path}
      </div>
    )
  }
}

Content.propTypes = {
  path: PropTypes.string.isRequired
}

export default Content
