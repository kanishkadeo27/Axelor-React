import React from 'react'

function Button({type,title}) {
  return (
    <>
      <button type={type} className="btn btn-primary">
            {title}
          </button>
    </>
  )
}

export default Button
