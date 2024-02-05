import React from "react";
import { ROLES } from "../constants";



function Role({ label }) {
  return (
    <div className="items">
      <label htmlFor="role">{label}</label>
      <div className="radio-group">
        {ROLES.map((item) => {
          return (
            <span key={item.id}>
              <input
                type="radio"
                id={item.value}
                name="your-role"
                value={item.value}
              />
              <label htmlFor={item.value}>{item.role}</label>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Role;
