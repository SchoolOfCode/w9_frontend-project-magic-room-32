import React from "react";
import "./buttons.css";

export default function Buttons() {

    return ( <div>

<h1>Weekly quizzes!</h1> 

<button className="Monday" >See Mondays quiz!</button>
<button className="Tuesday">See Tuesday quiz!</button>
<button className="Wednesday">See Wednesday quiz!</button>
<button className="Thursday">See Thursday quiz!</button>
<button className="Friday">See Friday quiz!</button>
    
{WeeklyRecap()}
    </div>)

}   

function WeeklyRecap() {
    return (<div>
        
        <h1>Weekend Recap</h1>
        <button className="week1"> Week 1 Recap!</button>
        <button className="week2"> Week 2 Recap!</button>
        <button className="week3"> Week 3 Recap!</button>
        <button className="week4"> Week 4 Recap!</button>
        <button className="week5"> Week 5 Recap!</button>
        <button className="week6"> Week 6 Recap!</button>
        <button className="week7"> Week 7 Recap!</button>
        <button className="week8"> Week 8 Recap!</button>
        <button className="week9"> Week 9 Recap!</button>
        <button className="week10"> Week 10 Recap!</button>
        <button className="week11"> Week 11 Recap!</button>
        <button className="week12"> Week 12 Recap!</button>
        <button className="week13"> Week 13 Recap!</button>
        <button className="week14"> Week 14 Recap!</button>
        <button className="week15"> Week 15 Recap!</button>
        <button className="week16"> Week 16 Recap!</button>

    </div>)
}

// function EachWeek() {
//     return (
//         <div><button className="week1"> Week 1 </button>
//         <button className="week2"> Week 2 </button>
//         <button className="week3"> Week 3 </button>
//         <button className="week4"> Week 4 </button>
//         <button className="week5"> Week 5 </button>
//         <button className="week6"> Week 6 </button>
//         <button className="week7"> Week 7 </button>
//         <button className="week8"> Week 8 </button>
//         <button className="week9"> Week 9 </button>
//         <button className="week10"> Week 10 </button>
//         <button className="week11"> Week 11 </button>
//         <button className="week12"> Week 12 </button>
//         <button className="week13"> Week 13 </button>
//         <button className="week14"> Week 14 </button>
//         <button className="week15"> Week 15 </button>
//         <button className="week16"> Week 16 </button>
//         </div>
//     )
    
// }