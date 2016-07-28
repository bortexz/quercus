import React, {PropTypes} from 'react'
import {getBreadcrumbPath} from '~/system/navigation'

class NavbarCenter extends React.Component {

  render () {
    let path = getBreadcrumbPath(this.props.current)
    return (
      <div className='nav-center'>
        {path.map((dir, index) => {
          return this.getBreadcrumbItem(dir, index)
        })
        }
      </div>
    )
  }

  getBreadcrumbItem (dir, index) {
    return (
      <div key={index} className='nav-item'>
        <a className='nav-item'>
          <span className={index === 0 ? 'icon' : ''}>
            {
              index === 0
              ? <i className='fa fa-code-fork'></i>
              : <span>{dir}</span>
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

  static propTypes () {
    return {
      current: PropTypes.string
    }
  }
}

export default NavbarCenter
