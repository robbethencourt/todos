import React, { PropTypes } from 'react'

Todo.propTypes = {
  todoToPass: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default function Todo ({ todoToPass, handleClick }) {
  const isOpen = todoToPass.get('complete') ? 'complete' : 'open'
  return (
    <li id={isOpen}>{todoToPass.get('content')} <button id={todoToPass.get('timestamp')} onClick={handleClick}>{isOpen === 'open' ? 'Mark Complete' : 'Mark Open'}</button></li>
  )
}
