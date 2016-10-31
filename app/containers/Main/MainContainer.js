import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MainContainer = React.createClass({
  propTypes: {
    // list your PropTypes
  },
  render () {
    return (
      <div>Hello World</div>
    )
  }
})

function mapStateToProps () {
  return {
    
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
