import React from 'react'
import classNames from 'classnames'
import {canGoUp, getUpDir} from '../../system/navigation'

class Navbar extends React.Component {
  render () {
    return (
      <div id='navbar' className='nav'>
        <div className='nav-left'>
          <a
            className={this.getArrowsClassnames('back')}
            onClick={() => this.arrowClick('back')}>
            <span className='icon'>
              <i className='fa fa-chevron-left'></i>
            </span>
          </a>
          <a
            className={this.getArrowsClassnames('forward')}
            onClick={() => this.arrowClick('forward')}>
            <span className='icon'>
              <i className='fa fa-chevron-right'></i>
            </span>
          </a>
          <a
            className={this.getUpClassnames()}
            onClick={() => this.goUp()}>
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

  // Arrows
  getArrowsClassnames (arrow) {
    return classNames('nav-item', {
      'is-disabled': this.props.navigation.get(arrow).size === 0
    })
  }

  arrowClick (arrow) {
    this.props.getFiles(this.props.navigation.get(arrow).first(), true)
  }

  // GO UP functions
  getUpClassnames () {
    return classNames('nav-item', {
      'is-disabled': !canGoUp(this.props.navigation.get('current'))
    })
  }

  goUp () {
    this.props.getFiles(getUpDir(this.props.navigation.get('current')))
  }

  getVisibleClassnames () {
    return classNames('fa', {
      'fa-dot-circle-o': this.props.options.get('hidden'),
      'fa-circle-o': !this.props.options.get('hidden')
    })
  }
}

export default Navbar
