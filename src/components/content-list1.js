import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="content-list1-text19 thq-heading-2">
                      Welcome to Galactic Gaming Platform
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="content-list1-text10 thq-body-small">
                      Explore a wide selection of games and secure proxies for a
                      seamless browsing experience.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading2 ?? (
                  <Fragment>
                    <h3 className="content-list1-text17 thq-heading-3">
                      Variety of Games
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="content-list1-text20 thq-body-small">
                      Choose from a diverse range of games to suit your
                      preferences and enjoy endless entertainment.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading3 ?? (
                  <Fragment>
                    <h3 className="content-list1-text21 thq-heading-3">
                      Secure Proxies
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content3 ?? (
                  <Fragment>
                    <p className="content-list1-text13 thq-body-small">
                      Access secure proxy servers to ensure your browsing
                      experience is safe and protected.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading4 ?? (
                  <Fragment>
                    <h3 className="content-list1-text14 thq-heading-3">
                      User-Friendly Interface
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content4 ?? (
                  <Fragment>
                    <p className="content-list1-text16 thq-body-small">
                      Enjoy easy navigation and gameplay with our intuitive and
                      user-friendly interface.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading5 ?? (
                  <Fragment>
                    <h3 className="content-list1-text18 thq-heading-3">
                      24/7 Support
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content5 ?? (
                  <Fragment>
                    <p className="content-list1-text15 thq-body-small">
                      Get assistance whenever you need it with our
                      round-the-clock customer support team.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3>
                {props.heading6 ?? (
                  <Fragment>
                    <h3 className="content-list1-text11 thq-heading-3">
                      Start Playing Today
                    </h3>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.content6 ?? (
                  <Fragment>
                    <p className="content-list1-text12 thq-body-small">
                      Join Galactic now to start gaming and browsing securely
                      with ease.
                    </p>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content1: undefined,
  heading6: undefined,
  content6: undefined,
  content3: undefined,
  heading4: undefined,
  content5: undefined,
  content4: undefined,
  heading2: undefined,
  heading5: undefined,
  heading1: undefined,
  content2: undefined,
  heading3: undefined,
}

ContentList1.propTypes = {
  content1: PropTypes.element,
  heading6: PropTypes.element,
  content6: PropTypes.element,
  content3: PropTypes.element,
  heading4: PropTypes.element,
  content5: PropTypes.element,
  content4: PropTypes.element,
  heading2: PropTypes.element,
  heading5: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  heading3: PropTypes.element,
}

export default ContentList1
