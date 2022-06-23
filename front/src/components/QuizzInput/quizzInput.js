import "./quizzInput.css";
import { useState } from "react";

import Chart from "../Chart/Chart";




export default function QuizzInput({ week }) {
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // number of quizz selected:
  const [quizzNumberSelected, setQuizzNumberSelected] = useState(true);

  const [correctAnswers, setCorrectAnswers] = useState(10);

  // radio button:  🏀✅
  const [quizzNumberRadio, setQuizzNumberRadio] = useState(1);

  // handle SLIDER change:
  function handleSliderChange() {
    let sliderValue = document.querySelector("#slider").value;

    setCorrectAnswers(sliderValue);
  }







  // handle quizz number selection
  function handleQuizzNumberSelect() {
    let dropDownQuizzSelect = document.querySelector("#quizzNumberSelect");

    if (quizzNumberSelected) {
      setQuizzNumberSelected(false);
      dropDownQuizzSelect.style.display = "block";
    } else {
      setQuizzNumberSelected(true);
      dropDownQuizzSelect.style.display = "none";
    }
  }









  // 🏀✅
  function handleRadioChange(event) {
    setQuizzNumberRadio(event.target.id);
  }











  // submitting results: 🏀
  async function submitResults() {
    console.log("week selected: >>>>> inside quizzInput", week);
    console.log("quiz number radio on submit: >>> ", quizzNumberRadio);
    console.log("quiz slider on submit: >>> ", correctAnswers);






    // fetch("http://localhost:3001/1", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     quizNumber: Number(quizzNumberRadio),
    //     correctAnswers: correctAnswers,
    //     weekNumber: week,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log("data: >>>", data))
    //   .catch((err) => {
    //     console.log("error: ", err);
    //   });
      








    let quizzInput = document.querySelector("#quizzInput");
    // quizzInput.style.display = 'none';
  }
















  return (
    <div id="quizzInput">


    <Chart weekNumber={week}  />


    
      {/* QUIZZ NUMBER radio buttons */}
      <p>
        <span className="boldFont">
          {" "}
          {quizzNumberRadio ? weekdays[quizzNumberRadio - 1] : ""}
        </span>

        {/* <button onClick={handleQuizzNumberSelect}> Select Number</button> */}
        <div id="quizzNumberSelect">
          <input
            type="radio"
            value="1"
            id="1"
            name="quizzNumber"
            onChange={handleRadioChange}
          />
          <label for="quizzNumber">1</label>

          <input
            type="radio"
            value="2"
            id="2"
            name="quizzNumber"
            onChange={handleRadioChange}
          />
          <label for="quizzNumber">2</label>

          <input
            type="radio"
            value="3"
            id="3"
            name="quizzNumber"
            onChange={handleRadioChange}
          />
          <label for="quizzNumber">3</label>

          <input
            type="radio"
            value="4"
            id="4"
            name="quizzNumber"
            onChange={handleRadioChange}
          />
          <label for="quizzNumber">4</label>

          <input
            type="radio"
            value="5"
            id="5"
            name="quizzNumber"
            onChange={handleRadioChange}
          />
          <label for="quizzNumber">5</label>
        </div>
      </p>

      {/* <p>you selected quizz number:</p> */}

      {/* SLIDER selector:  */}
      <p>
        Correct Answers: <span className="boldFont">{correctAnswers}</span>
      </p>

      <input
        type="range"
        min="1"
        max="10"
        step="1"
        class="slider"
        id="slider"
        default-value="0"
        onChange={handleSliderChange}
      />

      <button onClick={submitResults}>Submit</button>
   

      <h1>Week: {week}</h1>
    </div>
  );
}
