import React, { useState, useEffect } from "react";
import Header from "./Header";
import Weeks from "./Weeks";
import Days from "./Days";

function Calender() {
  const date = new Date();

  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [lists, setLists] = useState([]);
  const [firstDay, setFirstDay] = useState();

  const handleClick = (type) => {
    if (type === "prev") {
      setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
      setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
    } else {
      setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
      setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
    }
  };

  useEffect(() => {
    const renderCalender = (year, month) => {
      let startDay = new Date(year, month, 1).getDay();
      setFirstDay(startDay);
      let lastDate = new Date(year, month + 1, 0).getDate();
      let total = startDay + lastDate;

      setLists(
        Array(total)
          .fill()
          .map((_, index) => index + 1)
      );
    };
    renderCalender(currentYear, currentMonth);
  }, [currentMonth, currentYear]);

  return (
    <>
      <div className="wrapper">
        <Header
          currentMonth={currentMonth}
          currentYear={currentYear}
          handleClick={handleClick}
        />
        <div className="calender">
          <Weeks />
          <Days
            lists={lists}
            firstDay={firstDay}
            currentMonth={currentMonth}
            currentYear={currentYear}
            date={date}
          />
        </div>
      </div>
    </>
  );
}

export default Calender;
