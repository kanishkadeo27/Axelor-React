import React from 'react'

function Button({type,title,handleReset}) {
  return (
    <>
      <button type={type} className="btn btn-primary" onClick={handleReset}>
            {title}
          </button>
    </>
  )
}

export default Button
