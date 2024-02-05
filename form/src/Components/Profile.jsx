import React from "react";
import { PROFILES } from "../constants";


function Profile({label}) {
  return (
    <div className="items">
      <label htmlFor="sign-in">{label}</label>

      <div className="checkbox-group">
        {PROFILES.map((item) => {
          return (
            <span key={item.id}>
              <input
                type="checkbox"
                id={item.value}
                name="sign-on"
                value={item.value}
              />
              <label htmlFor={item.value}>{item.profile}</label>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
