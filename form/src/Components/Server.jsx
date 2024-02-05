import React from 'react'

function Server({label}) {
  return (
    <div className="items">
          <label htmlFor="webserver">{label}</label>
          <select id="webserver" name="webserver">
            <option value="apache">Apache</option>
            <option value="nginx">nginx</option>
            <option value="Node">Node</option>
          </select>
        </div>
  )
}

export default Server
