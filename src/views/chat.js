import React, { Fragment } from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Footer4 from '../components/footer4'
import './chat.css'

const Chat = (props) => {
  return (
    <div className="chat-container">
      <Helmet>
        <title>chat - Galactic</title>
        <meta property="og:title" content="chat - Galactic" />
      </Helmet>
      <Navbar8
        link2={
          <Fragment>
            <span className="chat-text10 thq-link thq-body-small">/games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="chat-text11 thq-link thq-body-small">/tools</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="chat-text12 thq-link thq-body-small">
              /settings
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="chat-text13 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="chat-text14 thq-body-large">Games</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="chat-text15 thq-body-large">Proxies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="chat-text16 thq-body-large">About</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="chat-text17 thq-link thq-body-small">
              /proxies
            </span>
          </Fragment>
        }
        link32={
          <Fragment>
            <span className="chat-text18 thq-link thq-body-small">
              <span>/tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="chat-text21">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="chat-text22">Login</span>
          </Fragment>
        }
        link321={
          <Fragment>
            <span className="chat-text23 thq-link thq-body-small">/more</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="chat-text24 thq-body-small">
              Welcome to our gaming platform!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="chat-text25 thq-body-small">
              Explore our collection of exciting games.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="chat-text26 thq-body-small">
              Access secure proxies for a seamless browsing experience.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="chat-text27 thq-body-small">
              Learn more about our website and team.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Banner1
        heading1={
          <Fragment>
            <span className="chat-text28 thq-heading-2">
              <span>Chat With The Creators!</span>
              <br></br>
              <span>(Benjamin M. &amp; Toby The Fox)</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Banner1>
      <span className="chat-date-time">
        <DateTimePrimitive
          format="MM/DD/YYYY"
          date="Mon Oct 07 2024 09:28:42 GMT-0400 (Eastern Daylight Time)"
        ></DateTimePrimitive>
      </span>
      <h1>
        <span>Social Media</span>
        <br></br>
        <span>_____________</span>
        <br></br>
      </h1>
      <span className="chat-text38">
        <span>Discord - galactic_support</span>
        <br></br>
        <span>Instagram - benbeamedyou</span>
        <br></br>
      </span>
      <h1>
        <span>_____________________</span>
        <br></br>
      </h1>
      <h1>Join Our Live Chat Room</h1>
      <span className="chat-text47">
        <span>Join our live chat room on Discord:</span>
        <br></br>
      </span>
      <a
        href="https://discord.gg/NdBJVXkawb"
        target="_blank"
        rel="noreferrer noopener"
        className="chat-link"
      >
        Here
      </a>
      <Footer4
        link1={
          <Fragment>
            <span className="chat-text50 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="chat-text51 thq-body-small">Games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="chat-text52 thq-body-small">Proxies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="chat-text53 thq-body-small">Tools</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="chat-text54 thq-body-small">Settings</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Chat
