import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Feed } from 'components'

const FeedConatiner = React.createClass({
  propTypes: {

  },
  render () {
    return (
      <Feed />
    )
  }
})

export default connect()(FeedConatiner)
