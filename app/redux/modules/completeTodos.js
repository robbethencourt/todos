import { fromJS } from 'immutable'

const ADD_TO_COMPLETE = 'ADD_TO_COMPLETE'
const REMOVE_FROM_COMPLETE = 'REMOVE_FROM_COMPLETE'

function addToComplete (todoId) {
  return {
    type: ADD_TO_COMPLETE,
    todoId
  }
}

function removeFromComplete (todoId) {
  return {
    type: REMOVE_FROM_COMPLETE,
    todoId
  }
}

export function handleAddRemoveComplete (isTodoComplete, todoId) {
  return function (dispatch) {
    if (isTodoComplete === 'open') {
      dispatch(addToComplete(todoId))
    } else {
      dispatch(removeFromComplete(todoId))
    }
  }
}

const initialState = fromJS({
  todoIds: []
})

export default function completeTodos (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_COMPLETE:
      return state.merge({
        todoIds: state.get('todoIds').unshift(action.todoId)
      })
    case REMOVE_FROM_COMPLETE:
      return state.merge({
        todoIds: state.get('todoIds').filter(x => x !== action.todoId)
      })
    default:
      return state
  }
}
