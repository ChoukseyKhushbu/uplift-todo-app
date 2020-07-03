import React, { useState } from "react";

function InputArea(props) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    const newTodo = event.target.value;
    setTask(newTodo);
  }

  return (
    <div className="form">
      <input type="text" value={task} onChange={handleChange} />
      <button
        onClick={() => {
          props.onadd(task);
          setTask("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
