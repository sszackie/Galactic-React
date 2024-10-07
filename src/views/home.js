import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Galactic</title>
        <meta property="og:title" content="Galactic" />
      </Helmet>
      <Navbar8
        link2={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">/games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">/tools</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">
              /settings
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text14 thq-body-large">Games</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text15 thq-body-large">Proxies</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text16 thq-body-large">About</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="home-text17 thq-link thq-body-small">
              /proxies
            </span>
          </Fragment>
        }
        link32={
          <Fragment>
            <span className="home-text18 thq-link thq-body-small">
              <span>/tools</span>
              <br></br>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text21">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text22">Login</span>
          </Fragment>
        }
        link321={
          <Fragment>
            <span className="home-text23 thq-link thq-body-small">/more</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text24 thq-body-small">
              Welcome to our gaming platform!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text25 thq-body-small">
              Explore our collection of exciting games.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text26 thq-body-small">
              Access secure proxies for a seamless browsing experience.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text27 thq-body-small">
              Learn more about our website and team.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
!function(w, d, s, ...args){
  var div = d.createElement('div');
  div.id = 'aichatbot';
  d.body.appendChild(div);
  w.chatbotConfig = args;
  var f = d.getElementsByTagName(s)[0],
  j = d.createElement(s);
  j.defer = true;
  j.type = 'module';
  j.src = 'https://aichatbot.sendbird.com/index.js';
  f.parentNode.insertBefore(j, f);
}(window, document, 'script', '8E74F947-8339-43B0-B8F7-D33343CE3203', 'onboarding_bot', {
  apiHost: 'https://api-cf-us-3.sendbird.com',
});
</script>`}
          ></Script>
        </div>
      </div>
      <h1>
        <span>Welcome To Galactic!</span>
        <br></br>
      </h1>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1645536908932-652fbd998029?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGdhbGF4eSUyMGljb258ZW58MHx8fHwxNzI4MzA5NjE4fDA&amp;ixlib=rb-4.0.3&amp;w=200"
        className="home-image"
      />
      <Hero17
        action1={
          <Fragment>
            <span className="home-text31 thq-body-small">Browse Games</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text32 thq-body-small">Discover Proxies</span>
          </Fragment>
        }
        image11Src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGNoYXQlMjBidWJibGV8ZW58MHx8fHwxNzI4MjMyNjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text33 thq-heading-2">Variety of Games</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text34 thq-heading-2">Proxies Available</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">
              Assortment of additives
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text36 thq-body-small">
              Choose from a wide selection of games to play and enjoy.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              Access proxies to enhance your gaming experience and protect your
              identity.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              See our more page for a wide amount of things from unblocked music
              sites to unblocked movies!
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text39">Use Proxies</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="home-text40">Play Games</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text41 thq-body-large">
              Explore our collection of games and proxies to start having fun!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text42 thq-heading-2">Ready to play?</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text43 thq-heading-2">Variety of Games</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text44 thq-heading-2">Proxies Available</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text45 thq-heading-2">
              User-Friendly Interface
            </span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1631896928983-2c94ea6f97e8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTQ0OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        feature1Description={
          <Fragment>
            <span className="home-text46 thq-body-small">
              Choose from a wide selection of games to play and enjoy.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text47 thq-body-small">
              Access proxies to enhance your gaming experience and protect your
              privacy.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text48 thq-body-small">
              Enjoy a seamless gaming experience with our easy-to-navigate
              interface.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text49 thq-heading-2">Browse Games</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text50 thq-heading-2">Choose Proxy</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text51 thq-heading-2">Start Playing</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text52 thq-heading-2">Have Fun!</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text53 thq-body-small">
              Explore our wide selection of games available for you to play.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text54 thq-body-small">
              Select a proxy server to enhance your gaming experience and
              protect your identity.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text55 thq-body-small">
              Simply click on your desired game and proxy to start enjoying
              seamless gameplay.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text56 thq-body-small">
              Immerse yourself in the world of gaming with our diverse range of
              options.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text57 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text58 thq-body-small">Games</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text59 thq-body-small">Proxies</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text60 thq-body-small">Tools</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text61 thq-body-small">Settings</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
