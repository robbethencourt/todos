import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Feed } from 'components'
import { List } from 'immutable'
import { bindActionCreators } from 'redux'
import * as feedActionCreators from 'redux/modules/feed'

const FeedConatiner = React.createClass({
  propTypes: {
    todosArray: PropTypes.instanceOf(List),
    completeTodos: PropTypes.instanceOf(List),
    openTodos: PropTypes.instanceOf(List),
    feed: PropTypes.string.isRequired,
    handleDisplay: PropTypes.func.isRequired
  },
  handleClick (e) {
    e.preventDefault()

    console.log(e.target.id)
    let currentlyDisplaying = e.target.id
    this.props.handleDisplay(currentlyDisplaying)
  },
  render () {
    return (
      <Feed
        todosArray={this.props.todosArray}
        handleClick={this.handleClick}
        feed={this.props.feed} />
    )
  }
})

function mapStateToProps ({todos, completeTodos, openTodos, feed}, props) {
  return {
    todosArray: todos.get('todoIds'),
    completeTodos: completeTodos.get('todoIds'),
    openTodos: openTodos.get('todoIds'),
    feed: feed.displaying
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators(feedActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedConatiner)
