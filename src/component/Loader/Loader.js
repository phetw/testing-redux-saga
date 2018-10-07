import React from 'react'
import { connect } from 'react-redux'

import './Loader.css'

const Loader = ({ loading }) => {
  return loading ? (
    <div className="overlay">
      <div className="spinner" />
    </div>
  ) : (
    <div />
  )
}

const mapStateToProps = ({ loading }) => ({ loading: loading })

export default connect(
  mapStateToProps,
  null
)(Loader)
