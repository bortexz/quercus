import React, {PropTypes} from 'react'
import IPropTypes from 'react-immutable-proptypes'
import {List} from 'immutable'
// Partial Components
import FilterInput from './partials/filter.jsx'
import ItemList from './partials/itemlist.jsx'

class Content extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
    this.state.shouldDisplayFilter = false
    this.state.filter = ''
  }

  render () {
    return (
      <div id='content'
        onMouseDown={() => this.clearSelect()}
        >
        <FilterInput
          onChange={e => this.filterChange(e.target.value)}
          shouldDisplay={this.state.shouldDisplayFilter}
          value={this.state.filter}
          onFilterBlur={() => this.onFilterBlur()} />

        <ItemList
          onSelection={(args) => this.handleSelection(args)}
          {...this.props}
           />
      </div>
    )
  }

  clearSelect () {
    this.props.selectItems(List())
  }

  componentWillReceiveProps (nextProps) {
    // If we have changed directory, remove filter
    console.log(nextProps.selected)
    if (this.props.current !== nextProps.current) {
      this.setState({
        filter: '',
        shouldDisplayFilter: false
      }, () => this.props.applyFilter(''))
    }
  }

  // Filter
  filterChange (value) {
    let newState = {
      filter: value
    }
    if (value !== '') newState.shouldDisplayFilter = true
    this.setState(newState, () => this.props.applyFilter(value))
  }

  // on focus of this container, if filter empty, hide
  onFilterBlur () {
    console.log('blur')
    if (!this.state.filter) {
      this.setState({shouldDisplayFilter: false})
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
