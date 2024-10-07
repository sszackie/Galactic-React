import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Footer4 from '../components/footer4'
import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>games - Galactic</title>
        <meta property="og:title" content="games - Galactic" />
      </Helmet>
      <Navbar8
        link2={
          <Fragment>
            <span className="games-text10 thq-link thq-body-small">/games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="games-text11 thq-link thq-body-small">/tools</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="games-text12 thq-link thq-body-small">
              /settings
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="games-text13 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="games-text14 thq-body-large">Games</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="games-text15 thq-body-large">Proxies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="games-text16 thq-body-large">About</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="games-text17 thq-link thq-body-small">
              /proxies
            </span>
          </Fragment>
        }
        link32={
          <Fragment>
            <span className="games-text18 thq-link thq-body-small">
              <span>/tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="games-text21">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="games-text22">Login</span>
          </Fragment>
        }
        link321={
          <Fragment>
            <span className="games-text23 thq-link thq-body-small">/more</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="games-text24 thq-body-small">
              Welcome to our gaming platform!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="games-text25 thq-body-small">
              Explore our collection of exciting games.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="games-text26 thq-body-small">
              Access secure proxies for a seamless browsing experience.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="games-text27 thq-body-small">
              Learn more about our website and team.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Banner1
        heading1={
          <Fragment>
            <span className="games-text28 thq-heading-2">
              <span>Unblocked Game Websites</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Banner1>
      <a
        href="http://bidoofery.github.io/gam3b0y"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link1 button"
      >
        GBA Emulator
      </a>
      <a
        href="https://bidoofery.github.io/sm64/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link2 button"
      >
        Mario 64
      </a>
      <a
        href="https://bidoofery.github.io/nativegames/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link3 button"
      >
        Native Games
      </a>
      <a
        href="https://theooofficial.github.io/myRETROGAMES/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link4 button"
      >
        Retro Bowl
      </a>
      <a
        href="https://theooofficial.github.io/myRETROGAMES/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link5 button"
      >
        Retro Games
      </a>
      <a
        href="https://bidoofery.github.io/gfiles/gfiles/rarch/"
        target="_blank"
        rel="noreferrer noopener"
        className="games-link6 button"
      >
        Web Retro
      </a>
      <Footer4
        link1={
          <Fragment>
            <span className="games-text31 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="games-text32 thq-body-small">Games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="games-text33 thq-body-small">Proxies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="games-text34 thq-body-small">Tools</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="games-text35 thq-body-small">Settings</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Games
