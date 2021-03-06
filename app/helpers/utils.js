export function formatTodo (todoText, uid) {
  const timestamp = Date.now()
  return {
    todo: {
      [timestamp]: {
        content: todoText,
        uid,
        timestamp,
        complete: false
      }
    },
    todoId: timestamp
  }
}
