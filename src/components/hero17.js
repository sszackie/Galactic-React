import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1"></div>
        <div className="hero17-actions">
          <Link to="/games" className="hero17-button1 thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text3 thq-body-small">
                    Browse Games
                  </span>
                </Fragment>
              )}
            </span>
          </Link>
          <Link to="/proxies" className="hero17-button2 thq-button-outline">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text4 thq-body-small">
                    Discover Proxies
                  </span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1675049603723-37dfc5eed92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NzI5NHw&ixlib=rb-4.0.3&q=80&w=1500',
  action1: undefined,
  image4Alt: 'Proxy settings illustration',
  image5Alt: 'Multiplayer gaming illustration',
  image8Alt: 'Anonymous browsing illustration',
  image2Alt: 'Proxy server illustration',
  image7Src:
    'https://images.unsplash.com/photo-1634309490604-1270c0d486e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NzQ1MHw&ixlib=rb-4.0.3&q=80&w=1500',
  image1Alt: 'Gaming illustration',
  image2Src:
    'https://images.unsplash.com/photo-1603974603756-dc134b7054e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NzM0N3w&ixlib=rb-4.0.3&q=80&w=1500',
  image10Src:
    'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxpbnN0YWdyYW18ZW58MHx8fHwxNzI4MjI5NTMwfDA&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'Virtual reality gaming illustration',
  image10Alt: 'Proxy shield illustration',
  image9Alt: 'Game controller illustration',
  image3Src:
    'https://images.unsplash.com/photo-1696552525917-f8ed81ab6798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NzM5Nnw&ixlib=rb-4.0.3&q=80&w=1500',
  image4Src:
    'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHx0aWt0b2t8ZW58MHx8fHwxNzI4MjI5NTA0fDA&ixlib=rb-4.0.3&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHNuYXBjaGF0fGVufDB8fHx8MTcyODIyOTU0Mnww&ixlib=rb-4.0.3&w=1500',
  action2: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1667991833334-10d614d2a5c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Alt: 'Proxy network illustration',
  image11Src:
    'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNoYXQlMjBidWJibGV8ZW58MHx8fHwxNzI4MjMyNjYwfDA&ixlib=rb-4.0.3&w=1500',
  image11Alt: 'Strategy game illustration',
  image8Src:
    'https://images.unsplash.com/photo-1656639969809-ebc544c96955?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fFJvYmxveHxlbnwwfHx8fDE3MjgxNDc5MTZ8MA&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'Secure proxy illustration',
  image3Alt: 'Online gaming illustration',
  image12Src:
    'https://images.unsplash.com/photo-1597523535985-ecae0b9b1d22?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHJhY2luZyUyMGdhbWV8ZW58MHx8fHwxNzI4MjI5NjEzfDA&ixlib=rb-4.0.3&w=1500',
  image9Src:
    'https://images.unsplash.com/photo-1587057159479-08f137d62022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NzY0M3w&ixlib=rb-4.0.3&q=80&w=1500',
}

Hero17.propTypes = {
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image10Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  action2: PropTypes.element,
  image6Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image9Src: PropTypes.string,
}

export default Hero17
