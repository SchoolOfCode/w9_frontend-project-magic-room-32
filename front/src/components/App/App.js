
import './App.css';
import {useState} from 'react';
import TopHeader from '../TopHeader/topHeader';
import QuizzInput from '../QuizzInput/quizzInput';




import './App.css';
import EachWeek from "../Buttons/eachWeek"


function App() {

  const [week, setWeek] = useState(1)




// WEEK BUTTONS:🏀
  function handleWeekClick(event) {

    

    // event.target.style.background = 'linear-gradient(to bottom, rgb(206, 1, 233) 5%, #535353 100%)';
    document.querySelector('.week').style.background = 'linear-gradient(to bottom, rgb(206, 1, 233) 5%, #535353 100%)';



    let quizzInput= document.querySelector('#quizzInput');
    quizzInput.style.display = 'flex';
    
    setWeek(event.target.id);


    // HIGHLIGHTING BUTTON:

  }








  


  return (
    <div className="App">



    <TopHeader />


    <QuizzInput  week={week} />
    
  

 
{/* 🏀 */}
<EachWeek  handleWeekClick={handleWeekClick}  />


    </div>
  );
}

export default App;
