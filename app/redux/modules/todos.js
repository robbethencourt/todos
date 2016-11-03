import { Map } from 'immutable'

const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'

export function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function updateTodoText (text) {
  return {
    type: UPDATE_TODO_TEXT,
    text
  }
}

const initialState = Map({
  error: '',
  todoContentToAdd: ''
})

export default function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.merge({
        [action.todo.todoId]: action.todo
      })
    case UPDATE_TODO_TEXT:
      return state.merge({
        todoContentToAdd: action.text
      })
    default:
      return state
  }
}
