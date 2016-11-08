import React, { PropTypes } from 'react'
import { AddTodoContainer } from 'containers'
import { List } from 'immutable'
import { TodoContainer } from 'containers'

Feed.propTypes = {
  todosArray: PropTypes.instanceOf(List),
  handleClick: PropTypes.func.isRequired
}

export default function Feed ({todosArray, handleClick, feed}) {
  return (
    <div>
      <h1>Todos</h1>
      <button onClick={handleClick} id={feed}>Display needToToggleThis Todos</button>
      <AddTodoContainer />
      {todosArray.size === 0
        ? <p>Wow! You have got no todos</p>
        : null }
      <ul>
        {todosArray.map((item, i) => (
          <TodoContainer todo={item} key={item} />
        ))}
      </ul>
    </div>
  )
}
