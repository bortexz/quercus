import React, {PropTypes} from 'react'
import IPropTypes from 'react-immutable-proptypes'

class SideBar extends React.Component {
  render () {
    return (
      <div id='sidebar'>
        <aside className='menu'>
          {this.getItems().map(key =>
            <div key={key}>
              <p className='menu-label'>
                {key}
              </p>
              <ul className='menu-list'>
                {this.getSubItems(key).map(item =>
                  <li key={item.name}>
                    <a onClick={() => this.props.onItemClick(item.path)}>
                      {item.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </aside>
      </div>
    )
  }

  getItems () {
    return [...this.props.items.keys()]
  }

  getSubItems (key) {
    return [...this.props.items.get(key)]
  }

  static propTypes () {
    return {
      onItemClick: PropTypes.func.isRequired,
      items: IPropTypes.orderedMapOf(PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired).isRequired).isRequired
    }
  }
}

export default SideBar
