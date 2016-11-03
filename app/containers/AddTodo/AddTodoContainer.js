import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { AddTodo } from 'components'
import { bindActionCreators } from 'redux'
import * as todosActionCreators from 'redux/modules/todos'
import { formatTodo } from 'helpers/utils'

const AddTodoContainer = React.createClass({
  propTypes: {
    updateTodoText: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    uid: PropTypes.string.isRequired,
    removeTodoContentToAdd: PropTypes.func.isRequired,
    todoContentToAdd: PropTypes.string.isRequired
  },
  handleClick (e) {
    e.preventDefault()
    console.log(this.props.uid)

    const todoText = e.target.parentElement.children[0].value
    this.props.addTodo(formatTodo(todoText, this.props.uid))
    this.props.removeTodoContentToAdd()

    // need to clear the input as well
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
  return bindActionCreators(todosActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoContainer)
