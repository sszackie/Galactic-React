import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="features24-image3"
          />
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features24-text3 thq-heading-2">
                      Variety of Games
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text5 thq-body-small">
                      Choose from a wide selection of games to play and enjoy.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2>
                {props.feature2Title ?? (
                  <Fragment>
                    <h2 className="features24-text2 thq-heading-2">
                      Proxies Available
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text6 thq-body-small">
                      Access proxies to enhance your gaming experience and
                      protect your identity.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features24-text1 thq-heading-2">
                      User-Friendly Interface
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text4 thq-body-small">
                      Enjoy a seamless and intuitive interface for easy
                      navigation and gameplay.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3Title: undefined,
  feature2Title: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGdhbGF4eSUyMGljb258ZW58MHx8fHwxNzI4MzA5NjE4fDA&ixlib=rb-4.0.3&w=500',
  imageAlt: 'image',
  feature2ImgAlt: 'Image for Feature 2',
  feature1Title: undefined,
  feature3Description: undefined,
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1689001508801-f5752406e18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Image for Feature 3',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1693521253988-90b9f0a137e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
}

Features24.propTypes = {
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
}

export default Features24
