import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <Link to="/" className="footer4-navlink1">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text4 thq-body-small">Home</span>
                </Fragment>
              )}
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text5 thq-body-small">Games</span>
                </Fragment>
              )}
            </a>
            <Link to="/proxies" className="footer4-navlink2">
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text6 thq-body-small">Proxies</span>
                </Fragment>
              )}
            </Link>
            <Link to="/tools" className="footer4-navlink3">
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text2 thq-body-small">Tools</span>
                </Fragment>
              )}
            </Link>
            <Link to="/settings" className="footer4-navlink4">
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text3 thq-body-small">Settings</span>
                </Fragment>
              )}
            </Link>
          </div>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer4-link2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="footer4-icon1"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path>
              <path d="M9 20.027c-3 .973-5.5 0-7-3"></path>
            </g>
          </svg>
        </a>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© Galact1c  Enterprises</span>
            </div>
            <div className="footer4-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link4: undefined,
  link5: undefined,
  link1: undefined,
  link2: undefined,
  link3: undefined,
}

Footer4.propTypes = {
  link4: PropTypes.element,
  link5: PropTypes.element,
  link1: PropTypes.element,
  link2: PropTypes.element,
  link3: PropTypes.element,
}

export default Footer4
