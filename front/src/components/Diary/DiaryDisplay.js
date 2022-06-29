import React from "react";
import { useEffect } from "react";

function DiaryDisplay({ week, diary, getDiary }) {
  useEffect(() => {
    getDiary();
  }, [week]);

  return (
    <div className = "diaryEntry" role="article">
      <p role="paragraph">"{diary}"</p>
    </div>
  );
}

export default DiaryDisplay;
