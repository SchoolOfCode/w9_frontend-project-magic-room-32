import React from "react";
import "./buttons.css";

export default function Buttons() {

    return (<div>
<h1>Weekly quizzes!</h1> 

<button onClick={() => alert("Please enter Mondays quiz results")} className="Monday" >See Mondays quiz!</button>
<button onClick={() => alert("Please enter Tuesday quiz results")} className="Tuesday">See Tuesday quiz!</button>
<button onClick={() => alert("Please enter Wednesday quiz results")} className="Wednesday">See Wednesday quiz!</button>
<button onClick={() => alert("Please enter Thursday quiz results")} className="Thursday">See Thursday quiz!</button>
<button onClick={() => alert("Please enter Friday quiz results")} className="Friday">See Friday quiz!</button>
    
{weeklyRecap()}
    </div>)

}   
<br></br>
function weeklyRecap() {
    return (<div>
        <br></br>
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

