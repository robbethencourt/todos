import React, { PropTypes } from 'react'
import { AuthButton } from 'components'

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}

export default function Authenticate ({onAuth, isFetching, error}) {
  return (
    <div>
      <h1>{'Authenticate'}</h1>
      <AuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p>{error}</p> : null}
    </div>
  )
}
