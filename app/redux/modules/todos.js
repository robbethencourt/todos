import { Map } from 'immutable'

const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'
const REMOVE_TODO_CONTENT_TO_ADD = 'REMOVE_TODO_CONTENT_TO_ADD'

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

export function removeTodoContentToAdd () {
  return {
    type: REMOVE_TODO_CONTENT_TO_ADD
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
        [action.todo.timestamp]: action.todo
      })
    case UPDATE_TODO_TEXT:
      return state.merge({
        todoContentToAdd: action.text
      })
    case REMOVE_TODO_CONTENT_TO_ADD:
      return state.merge({
        todoContentToAdd: ''
      })
    default:
      return state
  }
}
