import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { AddTodo } from 'components'
import { bindActionCreators } from 'redux'
import * as todosActionCreators from 'redux/modules/todos'
import * as openTodosActionCreators from 'redux/modules/openTodos'
import { formatTodo } from 'helpers/utils'

const AddTodoContainer = React.createClass({
  propTypes: {
    updateTodoText: PropTypes.func.isRequired,
    handleAddTodo: PropTypes.func.isRequired,
    uid: PropTypes.string.isRequired,
    removeTodoContentToAdd: PropTypes.func.isRequired,
    todoContentToAdd: PropTypes.string.isRequired,
    handleAddRemoveOpen: PropTypes.func.isRequired
  },
  handleClick (e) {
    e.preventDefault()

    const isTodoComplete = 'complete'
    const todoText = e.target.parentElement.children[0].value

    Promise.all([this.props.handleAddTodo(formatTodo(todoText, this.props.uid))])
      .then(x => this.props.handleAddRemoveOpen(isTodoComplete, x[0]))

    this.props.removeTodoContentToAdd()
  },
  render () {
    return (
      <AddTodo
        updateTodoText={this.props.updateTodoText}
        handleClick={this.handleClick}
        todoContentToAdd={this.props.todoContentToAdd} />
    )
  }
})

function mapStateToProps ({todos, users}, props) {
  return {
    todoContentToAdd: todos.get('todoContentToAdd'),
    uid: users.get('authedId')
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({...todosActionCreators, ...openTodosActionCreators}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoContainer)
