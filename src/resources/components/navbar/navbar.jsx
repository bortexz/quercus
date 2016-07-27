import React from 'react'

import classNames from 'classnames'

class Navbar extends React.Component {
  render () {
    return (
      <div id='navbar' className='nav'>
        <div className='nav-left'>
          <a className='nav-item'>
            <span className='icon'>
              <i className='fa fa-chevron-left'></i>
            </span>
          </a>
          <a className='nav-item'>
            <span className='icon'>
              <i className='fa fa-chevron-right'></i>
            </span>
          </a>
          <a className='nav-item'>
            <span className='icon'>
              <i className='fa fa-arrow-up'></i>
            </span>
          </a>
          <a className='nav-item' onClick={() => this.props.toggleHidden()}>
            <span className='icon'>
              <i className={this.getVisibleClassnames()}></i>
            </span>
          </a>
        </div>
      </div>
    )
  }

  getVisibleClassnames () {
    return classNames('fa', {
      'fa-dot-circle-o': this.props.options.get('hidden'),
      'fa-circle-o': !this.props.options.get('hidden')
    })
  }
}

export default Navbar
