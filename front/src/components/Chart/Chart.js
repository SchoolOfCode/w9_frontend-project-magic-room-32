import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// fake data:
import { dataUser } from "./dataChart.js";

// helper functions:
import { getDataByWeekNumber } from "./helperFunctions.js";
import { percentageCalc } from "./helperFunctions.js";

// to store correct per week in ARRAY:

let correctAll;
let percentage;

export default function BarChart({ weekNumber }) {
  correctAll = getDataByWeekNumber(weekNumber, dataUser);
  percentage = percentageCalc(correctAll);
  let daysInWek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // bring in the helper function to get data per week based on week selected

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
