import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span>
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text7 thq-heading-2">
                        Ready to play?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p>
                  {props.content1 ?? (
                    <Fragment>
                      <p className="cta26-text6 thq-body-large">
                        Explore our collection of games and proxies to start
                        having fun!
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <Link
                  to="/proxies"
                  className="cta26-navlink1 thq-button-filled"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text8">Use Proxies</span>
                      </Fragment>
                    )}
                  </span>
                </Link>
                <Link to="/games" className="cta26-navlink2 thq-button-filled">
                  <span>
                    {props.action11 ?? (
                      <Fragment>
                        <span className="cta26-text5">Play Games</span>
                      </Fragment>
                    )}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  action11: undefined,
  content1: undefined,
  heading1: undefined,
  action1: undefined,
}

CTA26.propTypes = {
  action11: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA26
