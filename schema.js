/users
  isAuthed - Bool
  isFetching - Bool
  error - String
  authedId - String
  [uid]
    name - String
    uid - String
    avatar - String

/todos
  error - String
  todoContentToAdd - String
  [todoId]
    content - String
    uid - String
    timestamp - Number

/completeTodos
  todos - Array

/uncompleteTodos
  todos - Array

/feed
  isFetching - Bool
  error - String
  todoIds - Array
