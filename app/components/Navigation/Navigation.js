import React, { PropTypes } from 'react'
import { Link } from 'react-router'

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link to='/'>{'Home'}</Link></li>
      </ul>
    : <noscript />
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li>{'New Item'}</li>
        <li><Link to='/logout'>{'Logout'}</Link></li>
      </ul>
    : <ul>
        <li><Link to='/'>{'Home'}</Link></li>
        <li><Link to='/auth'>{'Authenticate'}</Link></li>
      </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div>
      <nav>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}
