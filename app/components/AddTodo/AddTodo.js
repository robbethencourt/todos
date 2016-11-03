import React, { PropTypes } from 'react'

AddTodo.propTypes = {
  updateTodoText: PropTypes.func.isRequired
}

export default function AddTodo (props) {
  return (
    <div>
      <input type='text' onChange={(e) => props.updateTodoText(e.target.value)} /><button>Add</button>
    </div>
  )
}
