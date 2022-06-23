import "./App.css";
import { useEffect, useState } from "react";
import TopHeader from "../TopHeader/topHeader";
import QuizzInput from "../QuizzInput/quizzInput";

import "./App.css";
import EachWeek from "../Buttons/eachWeek";
import DiaryInput from "../DiaryList/Input";
import DiaryList from "../DiaryList/diaryList";

function App() {
  const [week, setWeek] = useState(1);
  const [diaries, setDiaries] = useState();

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

  useEffect(() => {
    async function displayDiary() {
      fetch(`http://localhost:3001/diary/${week}`)
        .then((response) => response.json())
        .then((data) => setDiaries(data))
        .catch((err) => {
          console.log("error: ", err);
        });
    }
    displayDiary();
  }, []);

  async function submitDiary({ e, week, text }) {
    e.preventDefault();

    fetch(`http://localhost:3001/diary/16`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weekNumber: week,
        diaryText: { text },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("data: >>>", data))
      .catch((err) => {
        console.log("error: ", err);
      });
  }

  function handleDelete(id) {
    const newList = diaries.filter((diary) => diary.id != id);
    setDiaries(newList);
    // delete req
  }

  return (
    <div className="App">
      <TopHeader />

      <QuizzInput week={week} />
      <DiaryInput submitDiary={submitDiary}></DiaryInput>
      {/* diaries && <DiaryList handleDelete={handleDelete} /> */}
      {/* 🏀 */}
      <EachWeek handleWeekClick={handleWeekClick} />
    </div>
  );
}

export default App;
