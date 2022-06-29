import { useState } from "react";

/* STORES THE DIARY ENTRIES FOR US TO LOOK BACK ON AND REFLECT.
   USERS ARE BE ABLE TO RECORD ANY STRENGTHS AND WEAKNESSES THEY HAVE NOTICED.
   ALLOWS THEM TO EASILY SEE WHICH AREAS THEY MAY WANT TO WORK ON. */

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
