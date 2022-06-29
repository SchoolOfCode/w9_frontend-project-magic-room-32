import { useState } from "react";

const DiaryInput = ({ submitDiary }) => {
  const [text, setText] = useState("");
  return (
    <div className="diary-list">
      <label>My Diary
      <form onSubmit={submitDiary}>
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
      </label>
    </div>
  );
};

export default DiaryInput;
