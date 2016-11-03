import React, { PropTypes } from 'react'
import { AddTodoContainer } from 'containers'

export default function Feed (props) {
  return (
    <div>
      <h1>Todos</h1>
      <button>Display needToToggleThis Todos</button>
      <AddTodoContainer />
      <ul>
        <li>Need to map over the todos</li>
      </ul>
    </div>
  )
}
