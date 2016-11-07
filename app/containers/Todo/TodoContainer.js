import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Todo } from 'components'
import * as completeTodosActionCreators from 'redux/modules/completeTodos'
import * as openTodosActionCreators from 'redux/modules/openTodos'
import * as todosActionCreators from 'redux/modules/todos'

const TodoContainer = React.createClass({
  propTypes: {
    todoToPass: PropTypes.object.isRequired,
    handleAddRemoveComplete: PropTypes.func.isRequired,
    handleAddRemoveOpen: PropTypes.func.isRequired,
    handleTodoOpenComplete: PropTypes.func.isRequired
  },
  handleClick (e) {
    e.preventDefault()

    const isTodoComplete = e.target.parentNode.id
    const todoId = parseInt(e.target.id, 10)

    this.props.handleAddRemoveComplete(isTodoComplete, todoId)
    this.props.handleAddRemoveOpen(isTodoComplete, todoId)
    this.props.handleTodoOpenComplete(isTodoComplete, todoId)
  },
  render () {
    return (
      <Todo
        todoToPass={this.props.todoToPass}
        handleClick={this.handleClick} />
    )
  }
})

function mapStateToProps ({ todos, completeTodos }, props) {
  return {
    todoToPass: todos.get('todosArray').get(props.todo.toString())
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({
    ...openTodosActionCreators,
    ...completeTodosActionCreators,
    ...todosActionCreators}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)
