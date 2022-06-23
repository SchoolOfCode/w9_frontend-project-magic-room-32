import React from "react";
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto'


// fake data:
import { dataUser } from './dataChart.js'

// helper function:
import {getDataByWeekNumber} from './helperFunctions.js';










export default function BarChart({weekNumber}) {

    console.log('inside bar chart comp');


    let daysInWek = ['Monday', 'Tuesday','Wednesday','Thursday','Friday'];


    // 🏀
// bring in the helper function to get data per week based on week selected






    return (<div>




<div id='chart'>


<h1>Quiz results for Week {weekNumber}</h1>

    <Bar 
        data ={
            {
                labels: daysInWek, 
                datasets: [{
                    label: 'Weekly Quiz Results',
                    data: [1,2,3,5,8,3]
                }]
                }
                }
   

    />

</div>
<hr/>


    </div>)
}








