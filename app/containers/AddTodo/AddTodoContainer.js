import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { AddTodo } from 'components'
import { bindActionCreators } from 'redux'
import * as todosActionCreators from 'redux/modules/todos'

const AddTodoContainer = React.createClass({
  propTypes: {
    updateTodoText: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    todoContentToAdd: PropTypes.string.isRequired
  },
  render () {
    return (
      <AddTodo
        updateTodoText={this.props.updateTodoText} />
    )
  }
})

function mapStateToProps ({todos}, props) {
  return {
    todoContentToAdd: todos.get('todoContentToAdd')
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators(todosActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoContainer)
