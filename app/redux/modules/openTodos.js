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

export function handleAddRemoveOpen (actionToOpen, todoId) {
  return function (dispatch) {
    if (actionToOpen === 'ADD_TO_OPEN') {
      dispatch(addToOpen(todoId))
    } else {
      // removeFromOpen(todoId)
      console.log('something else')
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
    default:
      return state
  }
}
