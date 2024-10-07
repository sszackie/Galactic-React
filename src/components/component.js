import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <button type="button" className="button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="component-text2">Doge v4</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  button: undefined,
}

AppComponent.propTypes = {
  button: PropTypes.element,
}

export default AppComponent
