import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner12.css'

const Banner12 = (props) => {
  return (
    <div className="banner12-container1 thq-section-padding">
      <div className="banner12-max-width thq-section-max-width">
        <div className="banner12-container2">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="banner12-text4 thq-heading-2">
                  Welcome to our Gaming Platform!
                </h2>
              </Fragment>
            )}
          </h2>
          <h3>
            {props.content1 ?? (
              <Fragment>
                <h3 className="banner12-text3 thq-heading-3">
                  Discover a wide range of exciting games and secure proxies for
                  a seamless browsing experience.
                </h3>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner12-text5">Explore Games</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner12.defaultProps = {
  content1: undefined,
  heading1: undefined,
  action1: undefined,
}

Banner12.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default Banner12
