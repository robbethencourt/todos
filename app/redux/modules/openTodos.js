import { fromJS } from 'immutable'

const ADD_TO_OPEN = 'ADD_TO_OPEN'
const REMOVE_FROM_OPEN = 'REMOVE_FROM_OPEN'

function addToOpen (todoId) {
  return {
    type: ADD_TO_OPEN,
    todoId
  }
}

function removeFromOpen (todoId) {
  return {
    type: REMOVE_FROM_OPEN,
    todoId
  }
}

export function handleAddRemoveOpen (isTodoComplete, todoId) {
  return function (dispatch) {
    if (isTodoComplete === 'complete') {
      dispatch(addToOpen(todoId))
    } else {
      dispatch(removeFromOpen(todoId))
    }
  }
}

const initialState = fromJS({
  todoIds: []
})

export default function openTodos (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_OPEN:
      return state.merge({
        todoIds: state.get('todoIds').unshift(action.todoId)
      })
    case REMOVE_FROM_OPEN:
      return state.merge({
        todoIds: state.get('todoIds').shift(action.todoId)
      })
    default:
      return state
  }
}
