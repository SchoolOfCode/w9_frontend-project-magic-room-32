import React from "react";
import "./buttons.css";

export default function Buttons() {
  return (
    <div>
      <h1>Weekly quizzes!</h1>

      <button className="Monday">See Mondays quiz!</button>
      <button className="Tuesday">See Tuesday quiz!</button>
      <button className="Wednesday">See Wednesday quiz!</button>
      <button className="Thursday">See Thursday quiz!</button>
      <button className="Friday">See Friday quiz!</button>

      {WeeklyRecap()}
    </div>
  );
}

function WeeklyRecap() {
  return (
    <div>
      <h1>Weekend Recap</h1>
      <button className="week1R"> Week 1 Recap!</button>
      <button className="week2R"> Week 2 Recap!</button>
      <button className="week3R"> Week 3 Recap!</button>
      <button className="week4R"> Week 4 Recap!</button>
      <button className="week5R"> Week 5 Recap!</button>
      <button className="week6R"> Week 6 Recap!</button>
      <button className="week7R"> Week 7 Recap!</button>
      <button className="week8R"> Week 8 Recap!</button>
      <button className="week9R"> Week 9 Recap!</button>
      <button className="week10R"> Week 10 Recap!</button>
      <button className="week11R"> Week 11 Recap!</button>
      <button className="week12R"> Week 12 Recap!</button>
      <button className="week13R"> Week 13 Recap!</button>
      <button className="week14R"> Week 14 Recap!</button>
      <button className="week15R"> Week 15 Recap!</button>
      <button className="week16R"> Week 16 Recap!</button>
    </div>
  );
}
