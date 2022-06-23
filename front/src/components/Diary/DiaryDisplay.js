import React from "react";

function DiaryDisplay({ diary, getDiary }) {
  return (
    <div>
      <p>{diary}</p>
      <button onclick={getDiary(diary)}>Generate Diary</button>
    </div>
  );
}

export default DiaryDisplay;
