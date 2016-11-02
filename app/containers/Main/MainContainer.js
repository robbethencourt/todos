import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navigation } from 'components'

const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render () {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default connect(
  ({users}) => ({isAuthed: users.get('isAuthed')})
)(MainContainer)
