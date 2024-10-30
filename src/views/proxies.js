import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner11 from '../components/banner11'
import Footer4 from '../components/footer4'
import './proxies.css'

const Proxies = (props) => {
  return (
    <div className="proxies-container1">
      <Helmet>
        <title>proxies - Galactic</title>
        <meta property="og:title" content="proxies - Galactic" />
      </Helmet>
      <Navbar8
        link2={
          <Fragment>
            <span className="proxies-text10 thq-link thq-body-small">
              /games
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="proxies-text11 thq-link thq-body-small">
              /tools
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="proxies-text12 thq-link thq-body-small">
              /settings
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="proxies-text13 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="proxies-text14 thq-body-large">Games</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="proxies-text15 thq-body-large">Proxies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="proxies-text16 thq-body-large">About</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="proxies-text17 thq-link thq-body-small">
              /proxies
            </span>
          </Fragment>
        }
        link32={
          <Fragment>
            <span className="proxies-text18 thq-link thq-body-small">
              <span>/tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="proxies-text21">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="proxies-text22">Login</span>
          </Fragment>
        }
        link321={
          <Fragment>
            <span className="proxies-text23 thq-link thq-body-small">
              /more
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="proxies-text24 thq-body-small">
              Welcome to our gaming platform!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="proxies-text25 thq-body-small">
              Explore our collection of exciting games.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="proxies-text26 thq-body-small">
              Access secure proxies for a seamless browsing experience.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="proxies-text27 thq-body-small">
              Learn more about our website and team.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Banner11
        content1={
          <Fragment>
            <span className="proxies-text28 thq-heading-3">
              <span>
                Discover a variety of secure proxies to ensure uninterrupted
                browsing experience.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="proxies-text31 thq-heading-2">
              Welcome to our Proxy Collection!
            </span>
          </Fragment>
        }
      ></Banner11>
      <a
        href="https://unblocked-abyss-web.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link1 button"
      >
        <span>Abyss</span>
      </a>
      <a
        href="https://computer-science.fpr.net/"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link2 button"
      >
        <span>Asteroid v4</span>
      </a>
      <a
        href="https://unblocked-doge-cat.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link3 button"
      >
        <span>Jared v4</span>
      </a>
      <a
        href="https://unblocked-interstellar-bay.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
        className="proxies-link4 button"
      >
        <span>Interstellar</span>
      </a>
      <div className="proxies-container2"></div>
      <Footer4
        link1={
          <Fragment>
            <span className="proxies-text36 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="proxies-text37 thq-body-small">Games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="proxies-text38 thq-body-small">Proxies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="proxies-text39 thq-body-small">Tools</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="proxies-text40 thq-body-small">Settings</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Proxies
