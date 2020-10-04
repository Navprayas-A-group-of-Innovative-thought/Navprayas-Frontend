import React from 'react'

const Spinner = ({ text }) => (
  <span>
    <span
      className='spinner-border spinner-border-sm mr-3 p-2'
      role='status'
      aria-hidden='true'
    ></span>
    {text}
  </span>
)

export default Spinner
