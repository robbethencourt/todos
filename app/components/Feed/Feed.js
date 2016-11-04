import React, { PropTypes } from 'react'
import { AddTodoContainer } from 'containers'
import { List } from 'immutable'
import { TodoContainer } from 'containers'

Feed.propTypes = {
  todosArray: PropTypes.instanceOf(List)
}

export default function Feed ({todosArray}) {
  return (
    <div>
      <h1>Todos</h1>
      <button>Display needToToggleThis Todos</button>
      <AddTodoContainer />
      {todosArray.size === 0
        ? <p>Wow! You have got no todos</p>
        : null }
      <ul>
        {todosArray.map((item, i) => (
          <TodoContainer todo={item} key={item} />
        ))}
        <li>Need to map over the todos</li>
      </ul>
    </div>
  )
}
