import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer } from 'containers'

export default function getRoutes (checkAuth, history) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
        // use the below if there's auth in the app
        // <IndexRoute component={HomeContainer} onEnter={checkAuth} />
        <IndexRoute component={HomeContainer} />
      </Router>
    </Router>
  )
}
