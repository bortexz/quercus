import React, {PropTypes} from 'react'
import IPropTypes from 'react-immutable-proptypes'
import {List} from 'immutable'
import path from 'path'
// import { SelectableGroup, createSelectable } from 'react-selectable'

// Partial Components
import FilterInput from './partials/filter.jsx'
import Item from './partials/item.jsx'

import {openFile} from '../../system/files'

// createSelectable()

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
        onClick={() => this.clearSelect()}>
        <FilterInput
          onChange={e => this.filterChange(e.target.value)}
          shouldDisplay={this.state.shouldDisplayFilter}
          value={this.state.filter}
          onFilterBlur={() => this.onFilterBlur()} />

        <ul id='content-list'>
        {this.props.files.map(file =>
          <Item
            file={file}
            key={file.name}
            onClick={(e) => this.selectItem(e, file.name)}
            onDoubleClick={() => this.doubleClick(file)}
            selected={this.props.selected.indexOf(file.name) !== -1}
             />
        )}
        </ul>
      </div>
    )
  }

  // Select
  selectItem (e, filename) {
    this.props.selectItems(List([filename]))
    e.stopPropagation()
  }

  clearSelect () {
    this.props.selectItems(List())
  }

  doubleClick (file) {
    let fullpath = path.join(this.props.current, file.name)
    if (file.isDirectory) {
      this.props.gotoDirectory(fullpath)
    } else {
      openFile(fullpath)
    }
  }

  componentWillReceiveProps (nextProps) {
    // If we have changed directory, remove filter
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
