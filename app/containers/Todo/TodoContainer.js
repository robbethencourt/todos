import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Todo } from 'components'
import * as completeTodosActionCreators from 'redux/modules/completeTodos'

const TodoContainer = React.createClass({
  propTypes: {
    todoToPass: PropTypes.object.isRequired,
    handleAddRemoveComplete: PropTypes.func.isRequired
  },
  handleClick (e) {
    e.preventDefault()

    console.log(e.target.id)
    const todoId = e.target.id
    // this.props.handleAddRemoveComplete(todoId)
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
  return bindActionCreators(completeTodosActionCreators, props)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)
