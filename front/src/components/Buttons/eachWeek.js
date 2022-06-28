import React from "react";
import "./buttons.css";

import { useState } from "react";

// component:
export default function EachWeek({ handleWeekClick }) {
  const [weekNumber, setWeekNumber] = useState("None");

  let weeks = [];
  for (let i = 1; i <= 16; i++) {
    weeks.push(i);
  }

  // 🏀


  return (
    <div>
      {/* <h1>Week:  {weekNumber}</h1> */}
      <div id="EachWeek">
        {weeks.map((week, index) => {
          return (
            <button className="week" id={index + 1} onClick={handleWeekClick} key={index}>
              Week {week}
            </button>
          );
        })}
      </div>
    </div>
  );
}
