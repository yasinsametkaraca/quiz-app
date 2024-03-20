import React from "react"
import "./dropdown.css"

const Dropdown = ({data,setChange,placeholder}) => {
  return (
      <div className="dropdown">
          <select className="dropdown-select" onChange={(e) => setChange(e.target.value)}>
              <option>{placeholder}</option>
              {data.map((dt) => (
                  <option value={dt} key={dt}>
                      {dt}
                  </option>
              ))}
          </select>
      </div>
  )
}

export default Dropdown