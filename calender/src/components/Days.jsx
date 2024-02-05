import React from "react";

function Days({ lists, firstDay, currentMonth, currentYear, date }) {
  return (
    <>
      <ul className="days">
        {lists.map((item, i) => (
          <li
            key={i}
            className={
              item - firstDay === date.getDate() &&
              currentMonth === date.getMonth() &&
              currentYear === date.getFullYear()
                ? "current-date"
                : ""
            }
          >
            {item - firstDay <= 0 ? "" : item - firstDay}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Days;
