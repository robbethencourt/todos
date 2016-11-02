import { Map, fromJS } from 'immutable'

const FETCHING_TODOS = 'FETCHING_TODOS'
const FETCHING_TODOS_SUCCESS = 'FETCHING_TODOS_SUCCESS'
const FETCHING_TODOS_ERROR = 'FETCHING_TODOS_ERROR'
const ADD_TODO = 'ADD_TODO'
const MARK_COMPLETE = 'MARK_COMPLETE'

// mark isFetching to true in reducer
function fetchingTodos () {
  return {
    type: FETCHING_TODOS
  }
}

function fetchingTodosSuccess () {
  return {
    type: FETCHING_TODOS_SUCCESS
  }
}

function fetchingTodosError () {
  return {
    type: FETCHING_TODOS_ERROR
  }
}

function addTodo (content) {
  return {
    type: ADD_TODO,
    content
  }
}

function markComplete (todo) {
  return {
    type: MARK_COMPLETE,
    complete: true
  }
}

const initialState = Map({
  isFetching: true
})

export default function todos (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.merge({

      })

    default:
      state
  }
}
