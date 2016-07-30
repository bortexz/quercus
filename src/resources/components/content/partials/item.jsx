import React, {PropTypes} from 'react'
import classNames from 'classnames'

class Item extends React.Component {
  render () {
    return (
      <li
        className={this.getItemClassnames(this.props.file)}
        onClick={this.props.onClick}
        onDoubleClick={this.props.onDoubleClick}>
        <div
          className={this.getIconClassnames(this.props.file)}
          data-type={this.getDataType(this.props.file.name)}>
        </div>
        <span title={this.props.file.name}>{this.props.file.name}</span>
      </li>
    )
  }

  // Classnames
  getItemClassnames (file) {
    return classNames(
      'content-list-item',
      {
        'selected': this.props.selected
      })
  }

  getIconClassnames (file) {
    return classNames({
      'folder': file.isDirectory,
      'file file-lg': !file.isDirectory,
      'hidden': file.name.indexOf('.') === 0
    })
  }

  getDataType (filename) {
    let a = filename.split('.')
    if (a.length === 1 || (a[0] === '' && a.length === 2)) {
      return ''
    }
    return a.pop()
  }

  static PropTypes () {
    return {
      file: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isDirectory: PropTypes.boolean.isRequired
      })).isRequired,
      selected: PropTypes.boolean
    }
  }
}

export default Item
