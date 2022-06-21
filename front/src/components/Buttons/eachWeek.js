import React from "react";
import "./buttons.css";
import Buttons from "./buttons";

import {useState} from 'react';








export default function EachWeek() {

    const [weekNumber, setWeekNumber] = useState('None');

    let weeks =[];
    for(let i=1; i<=16; i++) {
        weeks.push(i);
    }









    function handleWeekClick(event) {
        let quizzInput= document.querySelector('#quizzInput');
        quizzInput.style.display = 'flex';
        console.log(event.target.id);
        setWeekNumber(event.target.id);
    }






    return (
        <div>
            <h1 >Week number: {weekNumber}</h1>
            <div id="EachWeek">
            
            {



                weeks.map((week, index)=> {
                    return <button className="week" id={index+1} onClick={handleWeekClick}>Week {week}</button>
                })





           

            }
</div>
        {/* <button onClick={() => Buttons} className="week1"> Week 1 </button>
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
        <button className="week16"> Week 16 </button> */}




        
        </div>
    )
}
