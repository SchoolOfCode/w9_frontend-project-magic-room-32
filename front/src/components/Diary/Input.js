import { useState } from "react";

/* THIS FUNCTION ALLOWS US TO CREATE A DIARY INPUT FIELD FOR US TO UPDATE THE SPECIFIC WEEK.
   THEN STORES THESE ENTRIES FOR US TO LOOK BACK ON AND REFLECT.
   REASONS FOR IT, WE WANTED OUR USERS TO BE ABLE TO RECORD AND STRENGTHS OR WEAKNESSES THEY HAVE NOTICED,
   ALLOWING THEM TO EASILY SEE WHICH AREAS THEY MAY WANT TO WORK ON */

const DiaryInput = ({ submitDiary }) => {
  const [text, setText] = useState("");
  return (
    <div className="diary-list">
      <form onSubmit={submitDiary}>
        <label>My Diary</label>
        <input
          id="input-diary"
          type="text"
          required
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiaryInput;
