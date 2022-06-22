import './chart.css';
import { Doughnut } from 'react-chartjs-2'

export default function Chart({weekNumber, answers}) {





    return (<div id='chartMainContainer'>
<h1>Chart Quiz Results {weekNumber}</h1>

<div id='chartContainer'>

<div className="chart"></div>
<div className="chart"></div>
<div className="chart"></div>
<div className="chart"></div>
<div className="chart"></div>



<Doughnut data={} />



</div>

    </div>)
}