import { fromJS } from 'immutable'

const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'
const REMOVE_TODO_CONTENT_TO_ADD = 'REMOVE_TODO_CONTENT_TO_ADD'
const MARK_COMPLETE = 'MARK_COMPLETE'
const MARK_OPEN = 'MARK_OPEN'

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function handleAddTodo (todo) {
  return function (dispatch) {
    dispatch(addTodo(todo))
    return todo.todoId
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

function markOpen (todoId) {
  return {
    type: MARK_OPEN,
    todoId
  }
}

function markComplete (todoId) {
  return {
    type: MARK_COMPLETE,
    todoId
  }
}

export function handleTodoOpenComplete (isTodoComplete, todoId) {
  return function (dispatch) {
    if (isTodoComplete === 'complete') {
      dispatch(markOpen(todoId))
    } else {
      dispatch(markComplete(todoId))
    }
  }
}

const initialState = fromJS({
  error: '',
  todoContentToAdd: '',
  todosArray: {},
  todoIds: []
})

export default function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.merge({
        todosArray: state.get('todosArray').merge(action.todo.todo),
        todoIds: state.get('todoIds').unshift(action.todo.todoId)
      })
    case UPDATE_TODO_TEXT:
      return state.merge({
        todoContentToAdd: action.text
      })
    case REMOVE_TODO_CONTENT_TO_ADD:
      return state.merge({
        todoContentToAdd: ''
      })
    case MARK_OPEN:
      let openTodo = state.get('todosArray').get(action.todoId.toString()).set('complete', false)
      return state.merge({
        todosArray: state.get('todosArray').set(action.todoId.toString(), openTodo)
      })
    case MARK_COMPLETE:
      let completeTodo = state.get('todosArray').get(action.todoId.toString()).set('complete', true)
      return state.merge({
        todosArray: state.get('todosArray').set(action.todoId.toString(), completeTodo)
      })
    default:
      return state
  }
}
