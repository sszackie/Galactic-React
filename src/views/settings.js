import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContentList1 from '../components/content-list1'
import Footer4 from '../components/footer4'
import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container1">
      <Helmet>
        <title>settings - Galactic</title>
        <meta property="og:title" content="settings - Galactic" />
      </Helmet>
      <Navbar8
        link2={
          <Fragment>
            <span className="settings-text10 thq-link thq-body-small">
              /games
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="settings-text11 thq-link thq-body-small">
              /tools
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="settings-text12 thq-link thq-body-small">
              /settings
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="settings-text13 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="settings-text14 thq-body-large">Games</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="settings-text15 thq-body-large">Proxies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="settings-text16 thq-body-large">About</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="settings-text17 thq-link thq-body-small">
              /proxies
            </span>
          </Fragment>
        }
        link32={
          <Fragment>
            <span className="settings-text18 thq-link thq-body-small">
              <span>/tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="settings-text21">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="settings-text22">Login</span>
          </Fragment>
        }
        link321={
          <Fragment>
            <span className="settings-text23 thq-link thq-body-small">
              /more
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="settings-text24 thq-body-small">
              Welcome to our gaming platform!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="settings-text25 thq-body-small">
              Explore our collection of exciting games.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="settings-text26 thq-body-small">
              Access secure proxies for a seamless browsing experience.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="settings-text27 thq-body-small">
              Learn more about our website and team.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <h1>Settings</h1>
      <ContentList1
        content1={
          <Fragment>
            <span className="settings-text29 thq-body-small">
              We haven&apos;t had time to add many settings as of right now but
              we do have methods like tab cloaking.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="settings-text30 thq-body-small">
              Link is in the chat section.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="settings-text31 thq-body-small">
              Access secure proxy servers to ensure your browsing experience is
              safe and protected.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="settings-text32 thq-body-small">
              Enjoy easy navigation and gameplay with our intuitive and
              user-friendly interface.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="settings-text33 thq-body-small">
              Get assistance whenever you need it with our round-the-clock
              customer support team.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="settings-text34 thq-body-small">
              Join Galactic now to start gaming and browsing securely with ease.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="settings-text35 thq-heading-2">
              Welcome to Galactic Settings
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="settings-text36 thq-heading-3">
              Any suggestions for settings let us know on our discord
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="settings-text37 thq-heading-3">
              ...But for now! Enjoy our Games and Proxies!
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="settings-text38 thq-heading-3">
              User-Friendly Interface
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <span className="settings-text39 thq-heading-3">24/7 Support</span>
          </Fragment>
        }
        heading6={
          <Fragment>
            <span className="settings-text40 thq-heading-3">
              Start Playing Today
            </span>
          </Fragment>
        }
      ></ContentList1>
      <h1>______________________________________________________</h1>
      <div className="settings-container2">
        <h1>
          <span>How To Cloak Tabs</span>
          <br></br>
        </h1>
        <span className="settings-text45">
          <span>Tabcloaker</span>
          <br></br>
          <span>A easy to use JS injection script to cloak tabs.</span>
          <br></br>
          <br></br>
          <span>Installation</span>
          <br></br>
          <span>Bookmark Injection</span>
          <br></br>
          <span>Create a new bookmark (from any site)</span>
          <br></br>
          <span>Edit the bookmark</span>
          <br></br>
          <span>Change the URL to the following code.</span>
          <br></br>
          <span>
            javascript: const script =
            document.createElement(&quot;script&quot;); script.src =
            &quot;https://a-riceeater.github.io/tabcloaker/cdn/tabcloaker.js&quot;;
            document.body.appendChild(script); void 0;
          </span>
          <br></br>
          <br></br>
          <span>Usage</span>
          <br></br>
          <span>On any site you want, run the bookmark.</span>
          <br></br>
          <span>To open the modal, press \ on your keyboard (Backslash).</span>
          <br></br>
          <br></br>
          <span>Disclaimer:</span>
          <br></br>
          <span>
            I am not responsible for anything that happens while using this.
          </span>
          <br></br>
          <span>
            All images used in the making of Tabcloaker go to their respective
            owners. All credit for this tool goes to Elijah on codesandbox.io
          </span>
          <br></br>
        </span>
      </div>
      <Footer4
        link1={
          <Fragment>
            <span className="settings-text77 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="settings-text78 thq-body-small">Games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="settings-text79 thq-body-small">Proxies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="settings-text80 thq-body-small">Tools</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="settings-text81 thq-body-small">Settings</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Settings
