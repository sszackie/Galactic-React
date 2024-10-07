import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner11.css'

const Banner11 = (props) => {
  return (
    <div className="banner11-container1 thq-section-padding">
      <div className="banner11-max-width thq-section-max-width">
        <div className="banner11-container2">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="banner11-text6 thq-heading-2">
                  Welcome to our Proxy Collection!
                </h2>
              </Fragment>
            )}
          </h2>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="banner11-icon1"
          >
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
          <h3>
            {props.content1 ?? (
              <Fragment>
                <h3 className="banner11-text2 thq-heading-3">
                  <span>
                    Explore a wide range of games and enjoy secure proxies for
                    uninterrupted browsing.
                  </span>
                  <br></br>
                  <br></br>
                </h3>
              </Fragment>
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

Banner11.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

Banner11.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Banner11
