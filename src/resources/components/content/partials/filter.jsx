import React from 'react'
import classNames from 'classnames'

class FilterInput extends React.Component {
  render () {
    return (
      <div id='filter-content-search' className={this.containerClassnames()}>
        <label htmlFor='content-filter'>Filter</label>
        <input
          type='text'
          name='content-filter'
          value={this.props.value}
          autoFocus
          onChange={this.props.onChange}
          onBlur={this.props.onFilterBlur} />
      </div>
    )
  }

  containerClassnames () {
    return classNames('', {
      'disappear': !this.props.shouldDisplay
    })
  }
}

export default FilterInput
