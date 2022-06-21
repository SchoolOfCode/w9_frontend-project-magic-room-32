
import './quizzInput.css';

import { useState} from 'react';




export default function QuizzInput() {

    // number of quizz selected:
    const [quizzNumberSelected, setQuizzNumberSelected] = useState(true);
    const [correctAnswers, setCorrectAnswers] = useState(10);

    

    






// handle SLIDER change:
function handleSliderChange() {
    let sliderValue = document.querySelector('#slider').value;

    setCorrectAnswers(sliderValue);






}










    
// handle quizz number selection
    function handleQuizzNumberSelect() {
        let dropDownQuizzSelect = document.querySelector('#quizzNumberSelect');
        
        if(quizzNumberSelected) {
            setQuizzNumberSelected(false);
            dropDownQuizzSelect.style.display = 'block'
        }
        else {
            setQuizzNumberSelected(true)
            dropDownQuizzSelect.style.display = 'none'
        }
    
    }




    return (<div id='quizzInput'>
<h2>Update Quizz results Week 4:</h2>


<p>Quizz Number:  
        
        <button onClick={handleQuizzNumberSelect}> Select Number</button>
        <div id='quizzNumberSelect'>

            <input type='radio' value='1' name='quizzNumber'/>
            <label for='quizzNumber'>1</label>

            <input type='radio' value='2' name='quizzNumber'/>
            <label for='quizzNumber'>2</label>

            <input type='radio' value='3' name='quizzNumber'/>
            <label for='quizzNumber'>3</label>

            <input type='radio' value='4' name='quizzNumber'/>
            <label for='quizzNumber'>4</label>

            <input type='radio' value='5' name='quizzNumber'/>
            <label for='quizzNumber'>5</label>

        </div>
</p>




{/* SLIDER selector:  */}
<p>Number of Correct Answers: 

    



    



</p>


<input type="range" min="1" max="10" step='1'  class="slider" id="slider" default-value='0' onChange={handleSliderChange} />
<p id='sliderValue'>Slider: {correctAnswers} </p>






<button>Submit</button>

    </div>)
}





















