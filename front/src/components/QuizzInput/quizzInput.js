
import './quizzInput.css';
import EachWeek from '../Buttons/eachWeek';

import { useState} from 'react';




export default function QuizzInput() {

    // number of quizz selected:
    const [quizzNumberSelected, setQuizzNumberSelected] = useState(true);
    const [correctAnswers, setCorrectAnswers] = useState(10);
    const [quizzNumber, setQuizzNumber] = useState('1')
    

    






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









// submitting results:
    async function submitResults() {

        let radioSelected = document.querySelector('input[name="quizzNumber"]:checked').value;
        if(radioSelected == null) {
            radioSelected = 1;
            setQuizzNumber(1);
        }
        setQuizzNumber(radioSelected);

        console.log('correct answers: >>> ', correctAnswers);
        console.log('radio selected: >>> ', radioSelected);





        fetch('/back end url', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quizzNumber: radioSelected,
                correctAnswers: correctAnswers}),
        })

        .then(response => response.json())
        .then(data => console.log('data: >>>', data))
        .catch((err)=> {
            console.log('error: ', err);
        })




  
        
    }














    return (<div id='quizzInput'>





{/* QUIZZ NUMBER radio buttons */}
<p>Quizz Number:  
        
        <button onClick={handleQuizzNumberSelect}> Select Number</button>
        <div id='quizzNumberSelect'>

            <input type='radio' value='1' name='quizzNumber' />
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

<p>you selected quizz number: {quizzNumberSelected}</p>




{/* SLIDER selector:  */}
<p>Number of Correct Answers: 

    



    



</p>


<input      type="range" min="1" max="10" step='1'  
            class="slider" id="slider" default-value='0' onChange={handleSliderChange} />
<p id='sliderValue'>Slider: {correctAnswers} </p>






<button onClick={submitResults}>Submit</button>

    </div>)
}





















