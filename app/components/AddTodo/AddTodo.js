import React, { PropTypes } from 'react'

AddTodo.propTypes = {
  updateTodoText: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  todoContentToAdd: PropTypes.string.isRequired
}

export default function AddTodo ({updateTodoText, handleClick, todoContentToAdd}) {
  return (
    <div>
      <input type='text' value={todoContentToAdd} onChange={(e) => updateTodoText(e.target.value)} /><button onClick={(e) => handleClick(e)}>Add</button>
    </div>
  )
}
