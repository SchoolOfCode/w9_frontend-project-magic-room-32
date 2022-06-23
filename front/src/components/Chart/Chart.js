import './chart.css';
import {useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js';

import { data } from './dataChart';

import {getDataByWeekNumber } from './helperFunctions.js'

let dataByWeek;






export default function Chart({weekNumber}) {




    // const [dataByWeek, setDataByWeek] = useState(getDataByWeekNumber(weekNumber, data));

    dataByWeek = getDataByWeekNumber(weekNumber, data);








    return (<div id='chartMainContainer' >
<h1>CHART Quiz Results for week number: {weekNumber}</h1>

{
    dataByWeek.map((elem)=> {
        return (
            <>

            <p>week number: {elem.weekNumber} , test number: {elem.testNumber}, correct: {elem.correct} </p>
       
            
            
            </>
            )
    })
}









<hr />
    </div>)
}