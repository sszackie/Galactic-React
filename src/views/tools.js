import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner111 from '../components/banner111'
import Footer4 from '../components/footer4'
import './tools.css'

const Tools = (props) => {
  return (
    <div className="tools-container">
      <Helmet>
        <title>tools - Galactic</title>
        <meta property="og:title" content="tools - Galactic" />
      </Helmet>
      <Navbar8
        link2={
          <Fragment>
            <span className="tools-text10 thq-link thq-body-small">/games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="tools-text11 thq-link thq-body-small">/tools</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="tools-text12 thq-link thq-body-small">
              /settings
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="tools-text13 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="tools-text14 thq-body-large">Games</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="tools-text15 thq-body-large">Proxies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="tools-text16 thq-body-large">About</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="tools-text17 thq-link thq-body-small">
              /proxies
            </span>
          </Fragment>
        }
        link32={
          <Fragment>
            <span className="tools-text18 thq-link thq-body-small">
              <span>/tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="tools-text21">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="tools-text22">Login</span>
          </Fragment>
        }
        link321={
          <Fragment>
            <span className="tools-text23 thq-link thq-body-small">/more</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="tools-text24 thq-body-small">
              Welcome to our gaming platform!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="tools-text25 thq-body-small">
              Explore our collection of exciting games.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="tools-text26 thq-body-small">
              Access secure proxies for a seamless browsing experience.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="tools-text27 thq-body-small">
              Learn more about our website and team.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <svg width="48" height="48" viewBox="0 0 48 48">
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linejoin="round"
        >
          <path d="M18.284 43.171a20 20 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20 20 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a20 20 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a20 20 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A20 20 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a20 20 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z"></path>
          <path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></path>
        </g>
      </svg>
      <Banner111
        content1={
          <Fragment>
            <span className="tools-text28 thq-heading-3">
              <span>
                Bookmarks and things of that nature will be supported here.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="tools-text31 thq-heading-2">Tools</span>
          </Fragment>
        }
        rootClassName="banner111root-class-name"
      ></Banner111>
      <a
        href="https://schoolizboring.github.io/List-of-Bookmarklets/"
        target="_blank"
        rel="noreferrer noopener"
        className="tools-link1 button"
      >
        Bookmarklets
      </a>
      <a
        href="https://schoolizboring.github.io/My-Bookmarklet-Folder-OP-/"
        target="_blank"
        rel="noreferrer noopener"
        className="tools-link2 button"
      >
        Bookmarklets Folder (OP)
      </a>
      <a
        href="https://schoolizboring.github.io/Make-This-Site-An-App/"
        target="_blank"
        rel="noreferrer noopener"
        className="tools-link3 button"
      >
        How to Make Site an App
      </a>
      <Footer4
        link1={
          <Fragment>
            <span className="tools-text32 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="tools-text33 thq-body-small">Games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="tools-text34 thq-body-small">Proxies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="tools-text35 thq-body-small">Tools</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="tools-text36 thq-body-small">Settings</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Tools
