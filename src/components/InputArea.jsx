import React from "react";
import { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState();

  function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
  }
  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={text} />
      <button
        onClick={() => {
          props.addItems(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
