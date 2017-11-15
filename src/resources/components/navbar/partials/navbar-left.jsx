import React from 'react'
import classNames from 'classnames'
import {canGoUp, getUpDir} from '../../../system/navigation'

class NavbarLeft extends React.Component {

  render () {
    return (
      <div className='nav-left'>
        <a
          className={this.getArrowsClassnames('back')}
          onClick={() => this.arrowClick('back')}>
          <span className=''>
            <i className='fa fa-angle-left fa-2x'></i>
          </span>
        </a>
        <a
          className={this.getArrowsClassnames('forward')}
          onClick={() => this.arrowClick('forward')}>
          <span className=''>
            <i className='fa fa-angle-right fa-2x'></i>
          </span>
        </a>
        <a
          className={this.getUpClassnames()}
          onClick={() => this.goUp()}>
          <span className=''>
            <i className='fa fa-angle-double-up fa-2x'></i>
          </span>
        </a>
        <a className='nav-item' onClick={() => this.props.toggleHidden()}>
          <span className=''>
            <i className={this.getVisibleClassnames()}></i>
          </span>
        </a>
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
    return classNames('fa fa-lg', {
      'fa-eye': this.props.options.get('hidden'),
      'fa-low-vision': !this.props.options.get('hidden')
    })
  }
}

export default NavbarLeft
