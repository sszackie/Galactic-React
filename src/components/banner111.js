import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner111.css'

const Banner111 = (props) => {
  return (
    <div
      className={`banner111-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner111-max-width thq-section-max-width">
        <div className="banner111-container2">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="thq-heading-2">
                  Welcome to our Proxy Collection!
                </h2>
              </Fragment>
            )}
          </h2>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="banner111-icon1"
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
                <h3 className="banner111-text3 thq-heading-3">
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

Banner111.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

Banner111.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner111
