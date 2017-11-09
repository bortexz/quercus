import React from 'react'
import classNames from 'classnames'

class FilterInput extends React.Component {
  render () {
    return (
      <div id='filter-content-search' className='disapear'>
        <input
          type='text'
          name='content-filter'
          placeholder="Search"
          value={this.props.value}
          autoFocus
          onChange={this.props.onChange}
          onBlur={this.props.onFilterBlur} />
      </div>
    )
  }
}

export default FilterInput
