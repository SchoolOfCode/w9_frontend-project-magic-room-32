import "./App.css";
import { useEffect, useState } from "react";
import TopHeader from "../TopHeader/topHeader";
import QuizzInput from "../QuizzInput/quizzInput";

import "./App.css";
import EachWeek from "../Buttons/eachWeek";
import DiaryInput from "../DiaryList/Input";
// import DiaryList from "../DiaryList/diaryList";
import RenderDiary from "../DiaryList/diaryDisplay";

function App() {
  const [week, setWeek] = useState(1);
  const [diary, setDiary] = useState("");

  // WEEK BUTTONS:🏀
  function handleWeekClick(event) {
    // event.target.style.background = 'linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)';
    document.querySelector(".week").style.background =
      "linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)";

    let quizzInput = document.querySelector("#quizzInput");
    quizzInput.style.display = "flex";

    setWeek(event.target.id);

    // HIGHLIGHTING BUTTON:
  }

  // useEffect(() => {
  //   async function displayDiary() {
  //     fetch(`http://localhost:3001/diary/${week}`)
  //       .then((response) => response.json())
  //       .then((data) => setDiaries(data))
  //       .catch((err) => {
  //         console.log("error: ", err);
  //       });
  //   }
  //   displayDiary();
  // }, []);

    // function handleDelete(id) {
  //   const newList = diaries.filter((diary) => diary.id != id);
  //   setDiaries(newList);
  //   // delete req
  // }

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
      .then((data) => console.log("data: >>>", data))
      .catch((err) => {
        console.log("error: ", err);
      });
  }

  async function getDiary() {
    let response = await fetch(`http://localhost:3001/diary/${week}`);
    let data = await response.json();
    console.log(data);
}

  return (
    <div className="App">
      <TopHeader />
      <QuizzInput week={week} />
      <DiaryInput submitDiary={submitDiary}></DiaryInput>
      {/* diaries && <DiaryList handleDelete={handleDelete} /> */}
      {/* 🏀 */}
      <RenderDiary diary = {diary} getDiary = {getDiary}/>
      <EachWeek handleWeekClick={handleWeekClick} />
    </div>
    );
  }

export default App;
