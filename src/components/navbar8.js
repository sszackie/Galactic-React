import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <Link to="/" className="navbar8-navlink1">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="navbar8-icon10"
          >
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
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <div className="navbar8-container2">
            <nav className="navbar8-links1">
              <Link to="/games" className="navbar8-link21">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text24 thq-link thq-body-small">
                      /games
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to="/proxies" className="navbar8-link31">
                {props.link31 ?? (
                  <Fragment>
                    <span className="navbar8-text12 thq-link thq-body-small">
                      /proxies
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to="/tools" className="navbar8-link4">
                {props.link32 ?? (
                  <Fragment>
                    <span className="navbar8-text16 thq-link thq-body-small">
                      <span>/tools</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to="/more" className="navbar8-link51">
                {props.link321 ?? (
                  <Fragment>
                    <span className="navbar8-text13 thq-link thq-body-small">
                      /more
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to="/chat" className="navbar8-navlink2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="navbar8-icon14"
                >
                  <path
                    d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8 10h16v2H8zm0 6h10v2H8z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </nav>
          </div>
          <Link to="/settings" className="navbar8-navlink3">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              className="navbar8-icon17"
            >
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
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon21">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon23">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <a href={props.link2Url}>
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text24 thq-link thq-body-small">
                      /games
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url}>
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar8-text19 thq-link thq-body-small">
                      /tools
                    </span>
                  </Fragment>
                )}
              </a>
              <div className="navbar8-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar8-trigger"
                >
                  <span>
                    {props.link4 ?? (
                      <Fragment>
                        <span className="navbar8-text20 thq-link thq-body-small">
                          /settings
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="navbar8-icon-container">
                    {link5AccordionOpen && (
                      <div className="navbar8-container3">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon25">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar8-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon27">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar8-container5">
                    <a href={props.linkUrlPage1}>
                      <div className="navbar8-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar8-page1-image1"
                        />
                        <div className="navbar8-content1">
                          <span>
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar8-text21 thq-body-large">
                                  Home
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="navbar8-text22 thq-body-small">
                                  Welcome to our gaming platform!
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="navbar8-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar8-page2-image1"
                        />
                        <div className="navbar8-content2">
                          <span>
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar8-text27 thq-body-large">
                                  Games
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="navbar8-text14 thq-body-small">
                                  Explore our collection of exciting games.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="navbar8-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar8-page3-image1"
                        />
                        <div className="navbar8-content3">
                          <span>
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar8-text23 thq-body-large">
                                  Proxies
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="navbar8-text29 thq-body-small">
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
                      <div className="navbar8-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar8-page4-image1"
                        />
                        <div className="navbar8-content4">
                          <span>
                            {props.page4 ?? (
                              <Fragment>
                                <span className="navbar8-text15 thq-body-large">
                                  About
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page4Description ?? (
                              <Fragment>
                                <span className="navbar8-text28 thq-body-small">
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
            <div className="navbar8-buttons">
              <button className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar8-text26">Sign Up</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar8-text25">Login</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="navbar8-icon-group">
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
          <div className="navbar8-container6 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar8-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar8-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content5">
                    <span>
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar8-text21 thq-body-large">
                            Home
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="navbar8-text22 thq-body-small">
                            Welcome to our gaming platform!
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar8-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar8-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content6">
                    <span>
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar8-text27 thq-body-large">
                            Games
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="navbar8-text14 thq-body-small">
                            Explore our collection of exciting games.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar8-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar8-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content7">
                    <span>
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar8-text23 thq-body-large">
                            Proxies
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="navbar8-text29 thq-body-small">
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
                <div className="navbar8-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar8-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content8">
                    <span>
                      {props.page4 ?? (
                        <Fragment>
                          <span className="navbar8-text15 thq-body-large">
                            About
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="navbar8-text28 thq-body-small">
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
          className="navbar8-container7"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  link31: undefined,
  link321: undefined,
  page2ImageSrc:
    'https://images.unsplash.com/photo-1662405160933-1cac5e9f2055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1602902261548-691bc39d7004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1693521253988-90b9f0a137e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  link2Url: 'https://www.teleporthq.io',
  page2Description: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  page4: undefined,
  page4ImageAlt: 'About Image',
  link32: undefined,
  link3: undefined,
  link4: undefined,
  page2ImageAlt: 'Games Image',
  page1: undefined,
  linkUrlPage1: 'https://www.teleporthq.io',
  page1Description: undefined,
  link3Url: 'https://www.teleporthq.io',
  page3: undefined,
  page3ImageAlt: 'Proxies Image',
  linkUrlPage4: 'https://www.teleporthq.io',
  page1ImageAlt: 'Home Image',
  link2: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'Website Logo',
  action2: undefined,
  action1: undefined,
  page2: undefined,
  page4Description: undefined,
  page3Description: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1607376162689-10d6eb9d6c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODE0NTIxMHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Navbar8.propTypes = {
  link31: PropTypes.element,
  link321: PropTypes.element,
  page2ImageSrc: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  link2Url: PropTypes.string,
  page2Description: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  page4: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  link32: PropTypes.element,
  link3: PropTypes.element,
  link4: PropTypes.element,
  page2ImageAlt: PropTypes.string,
  page1: PropTypes.element,
  linkUrlPage1: PropTypes.string,
  page1Description: PropTypes.element,
  link3Url: PropTypes.string,
  page3: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  link2: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
  page2: PropTypes.element,
  page4Description: PropTypes.element,
  page3Description: PropTypes.element,
  page1ImageSrc: PropTypes.string,
}

export default Navbar8
