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

}

export function handleAddRemoveComplete (actionToComplete, todoId) {
  if (actionToComplete === ADD_TO_COMPLETE) {
    addToComplete(todoId)
  } else {
    removeFromComplete(todoId)
  }
}

const initialState = fromJS({
  todoIds: []
})

export default function completeTodos (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_COMPLETE:
      return state.merge({
        todoIds: state.get('todoIds').unshift(action.todo.todoId)
      })
    case REMOVE_FROM_COMPLETE:
      return state.merge({
        todoIds: 'need some help here'
      })
    default:
      return state
  }
}
