import React from 'react'
import IPropTypes from 'react-immutable-proptypes'

class Content extends React.Component {
  render () {
    return (
      <div id='content'>
        <ul>
        {this.props.files.map(file =>
          <li key={file}>{file}</li>
        )}
        </ul>
      </div>
    )
  }

  static propTypes () {
    return {
      files: IPropTypes.list.isRequired
    }
  }
}

export default Content
