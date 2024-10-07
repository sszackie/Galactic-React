import React from 'react'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <select multiple="true">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  )
}

export default Component1
