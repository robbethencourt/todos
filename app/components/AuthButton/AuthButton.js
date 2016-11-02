import React, { PropTypes } from 'react'

FacebookAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default function FacebookAuthButton ({onAuth, isFetching}) {
  return (
    <button onClick={onAuth}>
      {isFetching === true
        ? 'Loading'
        : 'Login'}
    </button>
  )
}
