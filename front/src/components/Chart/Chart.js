import React from "react";
import { Bar } from "react-chartjs-2";
import { dataUser } from "./dataChart.js";
import { getDataByWeekNumber } from "../../HelperFunction/helperFunctions.js";
import { percentageCalc } from "../../HelperFunction/helperFunctions.js";

// to store correct per week in ARRAY:

export default function BarChart({ weekNumber }) {
  let correctAll = getDataByWeekNumber(weekNumber, dataUser);
  let percentage = percentageCalc(correctAll);
  let daysInWek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div>
      <div id="chart">
        <h1>Quiz results for Week {weekNumber}</h1>
        <Bar
          data={{
            labels: daysInWek,
            datasets: [
              {
                label: "Weekly Quiz Results",
                data: correctAll,
              },
            ],
          }}
        />
      </div>
      <hr />

      <p>
        Percentage: <span id="percentage">{percentage}</span>
      </p>
      <hr />
    </div>
  );
}
