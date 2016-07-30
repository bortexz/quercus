import React, {PropTypes} from 'react'
import {getBreadcrumbFromPath, getPathFromBreadcrumb}
  from '~/system/navigation'

class NavbarCenter extends React.Component {

  render () {
    this.breadcrumb = getBreadcrumbFromPath(this.props.current)
    return (
      <div className='nav-center'>
        {
        this.breadcrumb.map((dir, index, arr) => {
          return this.getBreadcrumbItem(dir, index, (arr.length - 1) === index)
        })
        }
      </div>
    )
  }

  getBreadcrumbItem (dir, index, islast) {
    return (
      <div key={index} className='nav-item'>
        <a className={`nav-item ${islast ? 'is-disabled' : ''}`}>
          <span
            className={index === 0 ? 'icon' : ''}
            onClick={() => this.onElementClick(index)}>
            {
              index === 0
              ? <i className='fa fa-hdd-o'></i>
              : <span>{this.getCompactedText(dir)}</span>
            }
          </span>
        </a>
        <a className='nav-item is-disabled'>
          <span>
            /
          </span>
        </a>
      </div>
    )
  }

  getCompactedText (dir) {
    if (dir.length < 15) {
      return dir
    }
    return `${dir.substring(0, 12)}...`
  }

  onElementClick (index) {
    let path = getPathFromBreadcrumb(this.breadcrumb.slice(0, index + 1))
    this.props.getFiles(path)
  }

  static propTypes () {
    return {
      current: PropTypes.string
    }
  }
}

export default NavbarCenter
