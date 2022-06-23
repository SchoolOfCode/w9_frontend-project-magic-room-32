import React from "react";

function RenderDiary ({diary, getDiary}) {
    getDiary();
return (
    <div>
    <p>{diary}</p>
    <button onclick = {getDiary}>Generate Diary</button>
    </div>
    )
}

export default RenderDiary;