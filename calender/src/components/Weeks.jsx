import React from 'react'
import { WEEKS } from '../constant';

function Weeks() {
  return (
    <>
      <ul className="WEEKS">
            {WEEKS.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
    </>
  )
}

export default Weeks
