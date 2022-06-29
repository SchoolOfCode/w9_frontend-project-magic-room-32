import "./App.css";
import { useEffect, useState } from "react";

// components:
import Logo from "../logo/Logo";
import TopHeader from "../TopHeader/topHeader";
import QuizzInput from "../QuizzInput/quizzInput";
import EachWeek from "../Buttons/eachWeek";
import DiaryInput from "../Diary/Input";
import DiaryDisplay from "../Diary/DiaryDisplay";

// helper funcs:
import { buttonHighlight } from "../Chart/helperFunctions.js";

function App() {
  const [week, setWeek] = useState(0);
  const [diary, setDiary] = useState("");

  // WEEK BUTTONS to highlight:🏀
  function handleWeekClick(event) {
    buttonHighlight(event.target.id);

    // event.target.style.background = 'linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)';
    // document.querySelector(".week").style.background =
    // "linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)";

    let quizzInput = document.querySelector("#quizzInput");
    quizzInput.style.display = "flex";
    setWeek(Number(event.target.id));
  }

  async function getDiary() {
    let response = await fetch(`http://localhost:3001/diary/${week}`);
    let data = await response.json();
    console.log(`Diary Fetch Week: ${week}`);
    if (data.payload[0] === undefined) {
      setDiary(`Please submit an entry for week ${week}`);
      console.log(`No Diary entry exists for Week: ${week}`);
    } else {
      setDiary(data.payload[0].diary);
    }
  }

  async function submitDiary(e) {
    e.preventDefault();
    let inputValue = document.querySelector("#input-diary").value;
    fetch(`http://localhost:3001/diary/${week}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weekNumber: week,
        diaryText: inputValue,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        console.log(`Inserting DiaryText: "${inputValue}" for Week: ${week}`)
      )
      .catch((err) => {
        console.log("error: ", err);
      });
  }

  return (
    <div className="App">
      <Logo />
      <TopHeader />
      <QuizzInput week={week} />
      <DiaryInput submitDiary={submitDiary}></DiaryInput>
      <DiaryDisplay week={week} diary={diary} getDiary={getDiary} />
      <EachWeek handleWeekClick={handleWeekClick} />
    </div>
  );
}

export default App;
