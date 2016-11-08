import React, { PropTypes } from 'react'
import { AddTodoContainer } from 'containers'
import { List } from 'immutable'
import { TodoContainer } from 'containers'

Feed.propTypes = {
  handleClick: PropTypes.func.isRequired,
  feed: PropTypes.string.isRequired,
  completeTodos: PropTypes.instanceOf(List),
  openTodos: PropTypes.instanceOf(List)
}

export default function Feed ({handleClick, feed, completeTodos, openTodos}) {
  return (
    <div>
      <h1>Todos</h1>
      <button onClick={handleClick} id={feed}>Display {feed === 'open' ? 'Completed' : 'Open'} Todos</button>
      <AddTodoContainer />
      <h3>Below are your {feed === 'open' ? 'open' : 'completed'} todos</h3>
      <ul>
        {feed === 'open'
          ? openTodos.map((item) => (
          <TodoContainer todo={item} key={item} />
          ))
          : completeTodos.map((item) => (
            <TodoContainer todo={item} key={item} />
          ))}
      </ul>
    </div>
  )
}
