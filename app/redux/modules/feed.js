const DISPLAY_OPEN = 'DISPLAY_OPEN'
const DISPLAY_COMPLETE = 'DISPLAY_COMPLETE'

function displayOpen () {
  return {
    type: DISPLAY_OPEN
  }
}

function displayComplete () {
  return {
    type: DISPLAY_COMPLETE
  }
}

export function handleDisplay (currentlyDisplaying) {
  return function (dispatch) {
    if (currentlyDisplaying === 'open') {
      dispatch(displayComplete())
    } else {
      dispatch(displayOpen())
    }
  }
}

const initialState = {
  displaying: 'open'
}

export default function feed (state = initialState, action) {
  switch (action.type) {
    case DISPLAY_OPEN:
      return {
        displaying: 'open'
      }
    case DISPLAY_COMPLETE:
      return {
        displaying: 'complete'
      }
    default:
      return state
  }
}
