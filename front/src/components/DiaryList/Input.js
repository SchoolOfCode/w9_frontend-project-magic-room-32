import { useState } from "react";

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
