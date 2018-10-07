import React from 'react'
import { connect } from 'react-redux'

const Error = ({ error }) => {
  return error ? <section>Error</section> : <section />
}

const mapStateToProps = ({ error }) => ({ loading: error })

export default connect(
  mapStateToProps,
  null
)(Error)
