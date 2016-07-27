import React from 'react'

class Navbar extends React.Component {
  render () {
    return (
      <div id='navbar' className='nav'>
        <div className='nav-left'>
          <a className='nav-item'>
            <span className='icon'>
              <i className='fa fa-github'></i>
            </span>
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar
