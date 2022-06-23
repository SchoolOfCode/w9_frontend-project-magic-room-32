import React from "react";

function DiaryDisplay({ diary, getDiary }) {
  getDiary();
  return (
    <div>
      <p>diary here:</p>
      <p>{diary}</p>
      {/* <button onclick={getDiary(diary)}>Generate Diary</button> */}
    </div>
  );
}

export default DiaryDisplay;
