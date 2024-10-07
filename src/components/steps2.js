import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text25 thq-heading-2">
                      Browse Games
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text30 thq-body-small">
                      Explore our wide selection of games available for you to
                      play.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text13 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text24 thq-heading-2">
                      Choose Proxy
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text28 thq-body-small">
                      Select a proxy server to enhance your gaming experience
                      and protect your identity.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text16 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text27 thq-heading-2">
                      Start Playing
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text26 thq-body-small">
                      Simply click on your desired game and proxy to start
                      enjoying seamless gameplay.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text19 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text23 thq-heading-2">Have Fun!</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text29 thq-body-small">
                      Immerse yourself in the world of gaming with our diverse
                      range of options.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text22 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step2Title: undefined,
  step1Title: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step2Description: undefined,
  step4Description: undefined,
  step1Description: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Title: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
}

export default Steps2
