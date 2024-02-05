import React from 'react'

function Image({src,alt,width}) {
  return (
    <>
      <img src={src} alt={alt} width={width}/>
    </>
  )
}

export default Image
