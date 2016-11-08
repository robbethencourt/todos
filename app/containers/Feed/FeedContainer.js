import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Feed } from 'components'
import { List } from 'immutable'
import { bindActionCreators } from 'redux'
import * as feedActionCreators from 'redux/modules/feed'

const FeedConatiner = React.createClass({
  propTypes: {
    completeTodos: PropTypes.instanceOf(List),
    openTodos: PropTypes.instanceOf(List),
    feed: PropTypes.string.isRequired,
    handleDisplay: PropTypes.func.isRequired
  },
  handleClick (e) {
    e.preventDefault()

    let currentlyDisplaying = e.target.id
    this.props.handleDisplay(currentlyDisplaying)
  },
  render () {
    return (
      <Feed
        openTodos={this.props.openTodos}
        completeTodos={this.props.completeTodos}
        handleClick={this.handleClick}
        feed={this.props.feed} />
    )
  }
})

function mapStateToProps ({completeTodos, openTodos, feed}, props) {
  return {
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
