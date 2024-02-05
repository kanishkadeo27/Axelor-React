import React from 'react'
import { MONTHS } from '../constant'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Header({currentMonth,currentYear,handleClick}) {
  return (
    <>
    <header className='header'>
          <span>
          <ArrowBackIosNewIcon 
          onClick = {()=>handleClick("prev")}
          />
          </span>
          <p className="curr-month" id="curr-month">
            {MONTHS[currentMonth]} {currentYear}
          </p>
          <span>
          <ArrowForwardIosIcon 
          onClick = {()=>handleClick()}
          />
          </span>
        </header>
    </>
  )
}

export default Header
