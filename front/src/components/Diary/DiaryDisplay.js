import React from "react";
import { useEffect } from "react";



function DiaryDisplay({ week, diary, getDiary }) {
  useEffect(() => {
    getDiary();
  }, [week]);












  return (
    <div>
      <p>"{diary}"</p>
    </div>
  );
}













export default DiaryDisplay;
