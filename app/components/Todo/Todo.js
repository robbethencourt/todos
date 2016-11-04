import React, { PropTypes } from 'react'

Todo.propTypes = {
  todoToPass: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default function Todo ({ todoToPass, handleClick }) {
  return (
    <li>{todoToPass.get('content')} <button id={todoToPass.get('timestamp')} onClick={handleClick}>Delete</button></li>
  )
}
