import React, {PropTypes} from 'react'
import IPropTypes from 'react-immutable-proptypes'
import classNames from 'classnames'
import {List} from 'immutable'
import path from 'path'

import {openFile} from '../../system/files'

class Content extends React.Component {
  render () {
    return (
      <div id='content' onClick={() => this.clearSelect()}>
        <ul id='content-list'>
        {this.props.files.map(file =>
          <li key={file.name}
            className={this.getItemClassnames(file)}
            onClick={(e) => this.selectItem(e, file.name)}
            onDoubleClick={() => this.doubleClick(file)}>
            <div
              className={this.getIconClassnames(file)}
              data-type={this.getDataType(file.name)}>
            </div>
            <span>{file.name}</span>
          </li>
        )}
        </ul>
      </div>
    )
  }

  // Classnames
  getItemClassnames (file) {
    return classNames(
      'content-list-item',
      {
        'selected': this.props.selected.indexOf(file.name) !== -1
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

  // Select
  selectItem (e, filename) {
    this.props.selectItems(List([filename]))
    e.stopPropagation()
  }

  clearSelect () {
    this.props.selectItems(List())
  }

  // Double click
  doubleClick (file) {
    let fullpath = path.join(this.props.current, file.name)
    if (file.isDirectory) {
      this.props.gotoDirectory(fullpath)
    } else {
      openFile(fullpath)
    }
  }

  static propTypes () {
    return {
      files: IPropTypes.listOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isDirectory: PropTypes.boolean.isRequired
      }).isRequired).isRequired,
      current: PropTypes.string.isRequired || null
    }
  }
}

export default Content
