import React, { PropTypes } from 'react'

AddTodo.propTypes = {
  updateTodoText: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  todoContentToAdd: PropTypes.string.isRequired
}

export default function AddTodo (props) {
  return (
    <div>
      <input type='text' value={props.todoContentToAdd} onChange={(e) => props.updateTodoText(e.target.value)} /><button onClick={(e) => props.handleClick(e)}>Add</button>
    </div>
  )
}
