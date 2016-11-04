import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Feed } from 'components'
import { List } from 'immutable'

const FeedConatiner = React.createClass({
  propTypes: {
    todosArray: PropTypes.instanceOf(List)
  },
  handleClick (e) {
    e.preventDefault()
  },
  render () {
    return (
      <Feed
        todosArray={this.props.todosArray} />
    )
  }
})

function mapStateToProps ({todos}, props) {
  return {
    todosArray: todos.get('todoIds')
  }
}

export default connect(mapStateToProps)(FeedConatiner)
