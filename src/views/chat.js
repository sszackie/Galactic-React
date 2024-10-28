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
      <span className="chat-text47">Join our live chat room on Discord:</span>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          d="M25.7 7.1Q23 5.9 20 5.3h-.1c-.2.4-.5 1-.7 1.5c-2.2-.3-4.3-.3-6.4 0c-.2-.5-.5-1-.7-1.5H12q-3 .45-5.7 1.8C2.7 12.5 1.7 17.8 2.2 23v.1c2.4 1.8 4.7 2.8 7 3.5h.1c.5-.7 1-1.5 1.4-2.3v-.1c-.8-.3-1.5-.6-2.2-1c-.1 0-.1-.1 0-.1c.1-.1.3-.2.4-.3H9c4.6 2.1 9.5 2.1 14.1 0h.1c.1.1.3.2.4.3c.1 0 0 .1 0 .1c-.7.4-1.4.8-2.2 1c0 0-.1.1 0 .1c.4.8.9 1.6 1.4 2.3h.1c2.3-.7 4.6-1.8 7-3.5V23c.6-6-1-11.2-4.2-15.9M11.4 19.9c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8s-1.1 2.8-2.5 2.8m9.3 0c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8s-1.1 2.8-2.5 2.8"
          fill="currentColor"
        ></path>
      </svg>
      <a
        href="https://discord.gg/NdBJVXkawb"
        target="_blank"
        rel="noreferrer noopener"
        className="chat-link1"
      >
        Support Discord Server
      </a>
      <h1>Join Our Partners Discord Server</h1>
      <a
        href="https://discord.gg/xpnATXBpaJ"
        target="_blank"
        rel="noreferrer noopener"
        className="chat-link2"
      >
        GITE Partner Server (Partnership)
      </a>
      <Footer4
        link1={
          <Fragment>
            <span className="chat-text49 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="chat-text50 thq-body-small">Games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="chat-text51 thq-body-small">Proxies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="chat-text52 thq-body-small">Tools</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="chat-text53 thq-body-small">Settings</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Chat
