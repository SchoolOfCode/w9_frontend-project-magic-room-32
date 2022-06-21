import React from "react";
import "./buttons.css";
import Buttons from "./buttons";

export default function EachWeek() {
    return (
        <div>
            <h1>Please select which Week you are on from the list below.</h1>
        <button onClick={() => Buttons} className="week1"> Week 1 </button>
        <button onClick={() => console.log("click")} className="week2"> Week 2 </button>
        <button className="week3"> Week 3 </button>
        <button className="week4"> Week 4 </button>
        <button className="week5"> Week 5 </button>
        <button className="week6"> Week 6 </button>
        <button className="week7"> Week 7 </button>
        <button className="week8"> Week 8 </button>
        <button className="week9"> Week 9 </button>
        <button className="week10"> Week 10 </button>
        <button className="week11"> Week 11 </button>
        <button className="week12"> Week 12 </button>
        <button className="week13"> Week 13 </button>
        <button className="week14"> Week 14 </button>
        <button className="week15"> Week 15 </button>
        <button className="week16"> Week 16 </button>
        <Buttons></Buttons>
        </div>
    )
}
