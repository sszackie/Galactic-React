import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container1 thq-section-padding">
      <h2>
        {props.heading1 ?? (
          <Fragment>
            <h2 className="banner1-text1 thq-heading-2">
              <span>Chat With The Creators!</span>
              <br></br>
              <span>(Benjamin M. &amp; Toby The Fox)</span>
              <br></br>
            </h2>
          </Fragment>
        )}
      </h2>
      <svg width="48" height="48" viewBox="0 0 48 48" className="banner1-icon1">
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linejoin="round"
        >
          <path d="M41 14L24 4L7 14v20l17 10l17-10z"></path>
          <path
            d="M16 18.998L23.993 24l8.002-5.002M24 24v9"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2"></div>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
}

export default Banner1
