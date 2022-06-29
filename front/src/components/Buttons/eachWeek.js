import React from "react";
import "./buttons.css";

// component:
export default function EachWeek({ handleWeekClick }) {
  let weeks = [];
  for (let i = 1; i <= 16; i++) {
    weeks.push(i);
  }

  return (
    <div>
      <div id="EachWeek">
        {weeks.map((week, index) => {
          return (
            <button
              className="week"
              id={index + 1}
              onClick={handleWeekClick}
              key={index}
            >
              Week {week}
            </button>
          );
        })}
      </div>
    </div>
  );
}
