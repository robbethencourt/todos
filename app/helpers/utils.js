export function formatTodo (todoText, uid) {
  const timestamp = Date.now()
  return {
    content: todoText,
    uid,
    timestamp
  }
}
