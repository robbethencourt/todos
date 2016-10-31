import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { checkIfAuthed } from 'helpers/auth'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import * as reducers from 'redux/modules'
import { hashHistory } from 'react-router'

const store = createStore(combineReducers({...reducers, routing: routerReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

// this lets us store our url as state in our redux store
const history = syncHistoryWithStore(hashHistory, store)

// ***************************************
// below to check authentication in app //
// ***************************************
function checkAuth (nextState, replace) {
  if (store.getState().users.isFetching === true) {
    return
  }

  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      // *******************************************************************************
      replace('/') // fill this in so that the authed user gets redirected to their profile page or feed? Devends on the app
    }
  } else {
    if (isAuthed !== true) {
      replace('/auth')
    }
  }
}

ReactDOM.render(
  // Provider allows gives our components access to the redux store, which is where all of our state lives
  <Provider store={store}>
    // getting the routes from the config/routes.js file
    // use the below if auth is used in app
    // {getRoutes(checkAuth, history)}
    {getRoutes(history)}
  </Provider>,
  document.getElementById('app')
)
