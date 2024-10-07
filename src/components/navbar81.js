import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar81.css'

const Navbar81 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <header className="navbar81-container1">
      <header data-thq="thq-navbar" className="navbar81-navbar-interactive">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linejoin="round"
          >
            <path d="M41 14L24 4L7 14v20l17 10l17-10z"></path>
            <path
              d="M16 18.998L23.993 24l8.002-5.002M24 24v9"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
        <div data-thq="thq-navbar-nav" className="navbar81-desktop-menu">
          <nav className="navbar81-links1">
            <span className="navbar81-link11">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar81-text22 thq-link thq-body-small">
                    /home
                  </span>
                </Fragment>
              )}
            </span>
            <span className="navbar81-link21">
              {props.link2 ?? (
                <Fragment>
                  <span className="thq-link thq-body-small">/games</span>
                </Fragment>
              )}
            </span>
            <span className="navbar81-link31">
              {props.link31 ?? (
                <Fragment>
                  <span className="navbar81-text23 thq-link thq-body-small">
                    /proxies
                  </span>
                </Fragment>
              )}
            </span>
            <span className="navbar81-link4">
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar81-text17 thq-link thq-body-small">
                    /tools
                  </span>
                </Fragment>
              )}
            </span>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar81-link4-dropdown-trigger"
            >
              <span className="navbar81-link51">
                {props.link4 ?? (
                  <Fragment>
                    <span className="thq-link thq-body-small">/settings</span>
                  </Fragment>
                )}
              </span>
              <div className="navbar81-icon-container1">
                {link5DropdownVisible && (
                  <div className="navbar81-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar81-icon14">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar81-container3"></div>
                )}
              </div>
            </div>
          </nav>
          <div className="navbar81-buttons1"></div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar81-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar81-icon16">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar81-mobile-menu">
          <div className="navbar81-nav">
            <div className="navbar81-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar81-logo"
              />
              <div data-thq="thq-close-menu" className="navbar81-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar81-icon18">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar81-links2">
              <a href={props.link1Url}>
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar81-text22 thq-link thq-body-small">
                      /home
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url}>
                {props.link2 ?? (
                  <Fragment>
                    <span className="thq-link thq-body-small">/games</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url}>
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar81-text17 thq-link thq-body-small">
                      /tools
                    </span>
                  </Fragment>
                )}
              </a>
              <div className="navbar81-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar81-trigger"
                >
                  <span>
                    {props.link4 ?? (
                      <Fragment>
                        <span className="thq-link thq-body-small">
                          /settings
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="navbar81-icon-container2">
                    {link5AccordionOpen && (
                      <div className="navbar81-container4">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar81-icon20"
                        >
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar81-container5">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar81-icon22"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar81-container6">
                    <a href={props.linkUrlPage1}>
                      <div className="navbar81-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar81-page1-image1"
                        />
                        <div className="navbar81-content1">
                          <span>
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar81-text14 thq-body-large">
                                  Home
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="thq-body-small">
                                  Welcome to our gaming platform!
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="navbar81-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar81-page2-image1"
                        />
                        <div className="navbar81-content2">
                          <span>
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar81-text13 thq-body-large">
                                  Games
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="thq-body-small">
                                  Explore our collection of exciting games.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="navbar81-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar81-page3-image1"
                        />
                        <div className="navbar81-content3">
                          <span>
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar81-text26 thq-body-large">
                                  Proxies
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="thq-body-small">
                                  Access secure proxies for a seamless browsing
                                  experience.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage4}>
                      <div className="navbar81-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar81-page4-image1"
                        />
                        <div className="navbar81-content4">
                          <span>
                            {props.page4 ?? (
                              <Fragment>
                                <span className="navbar81-text24 thq-body-large">
                                  About
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page4Description ?? (
                              <Fragment>
                                <span className="thq-body-small">
                                  Learn more about our website and team.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar81-buttons2">
              <button className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span>Sign Up</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span>Login</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="navbar81-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navbar81-container7 thq-box-shadow">
            <div className="navbar81-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar81-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar81-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar81-content5">
                    <span>
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar81-text14 thq-body-large">
                            Home
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="thq-body-small">
                            Welcome to our gaming platform!
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar81-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar81-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar81-content6">
                    <span>
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar81-text13 thq-body-large">
                            Games
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="thq-body-small">
                            Explore our collection of exciting games.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar81-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar81-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar81-content7">
                    <span>
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar81-text26 thq-body-large">
                            Proxies
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="thq-body-small">
                            Access secure proxies for a seamless browsing
                            experience.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="navbar81-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar81-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar81-content8">
                    <span>
                      {props.page4 ?? (
                        <Fragment>
                          <span className="navbar81-text24 thq-body-large">
                            About
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="thq-body-small">
                            Learn more about our website and team.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar81-container8"
        ></div>
      )}
    </header>
  )
}

Navbar81.defaultProps = {
  logoAlt: 'Website Logo',
  page2Description: undefined,
  page3ImageAlt: 'Proxies Image',
  page2: undefined,
  page1: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  linkUrlPage4: 'https://www.teleporthq.io',
  page3Description: undefined,
  link2Url: 'https://www.teleporthq.io',
  page2ImageAlt: 'Games Image',
  page1Description: undefined,
  link3Url: 'https://www.teleporthq.io',
  link3: undefined,
  page4Description: undefined,
  page2ImageSrc:
    'https://images.unsplash.com/photo-1662405160933-1cac5e9f2055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
  link2: undefined,
  page1ImageAlt: 'Home Image',
  link4: undefined,
  link1: undefined,
  linkUrlPage1: 'https://www.teleporthq.io',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1607376162689-10d6eb9d6c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  link31: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  linkUrlPage2: 'https://www.teleporthq.io',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1693521253988-90b9f0a137e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  page4: undefined,
  action1: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1602902261548-691bc39d7004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  page3: undefined,
  page4ImageAlt: 'About Image',
  link1Url: 'https://www.teleporthq.io',
}

Navbar81.propTypes = {
  logoAlt: PropTypes.string,
  page2Description: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  page2: PropTypes.element,
  page1: PropTypes.element,
  logoSrc: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  page3Description: PropTypes.element,
  link2Url: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page1Description: PropTypes.element,
  link3Url: PropTypes.string,
  link3: PropTypes.element,
  page4Description: PropTypes.element,
  page2ImageSrc: PropTypes.string,
  action2: PropTypes.element,
  link2: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  link4: PropTypes.element,
  link1: PropTypes.element,
  linkUrlPage1: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  link31: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  page4: PropTypes.element,
  action1: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  page3: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  link1Url: PropTypes.string,
}

export default Navbar81
