import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [todoArray, setTodoArray] = useState([]);

  function addTodo(task) {
    if (task) {
      setTodoArray([
        ...todoArray,
        { task: task, completed: false, editing: false, id: uuidv4() },
      ]);
    }
  }
  function delTodo(id) {
    setTodoArray((todoArray) => {
      return todoArray.filter((item, ind) => ind !== id);
    });
  }
  function editTodo(e, id) {
    const { name, value } = e.target;
    if (name === "check") {
      setTodoArray((todoArray) => {
        return todoArray.map((item, ind) => {
          if (ind === id) {
            item.completed = !item.completed;
          }
          return item;
        });
      });
    } else if (name === "edit") {
      setTodoArray((todoArray) => {
        return todoArray.map((item, ind) => {
          if (ind === id) {
            item.task = value;
          }
          return item;
        });
      });
    }
  }
  function displayDel(id) {
    setTodoArray((todoArray) => {
      return todoArray.map((item, ind) => {
        if (ind === id) {
          item.editing = !item.editing;
        }
        return item;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onadd={addTodo} />
      <div>
        {todoArray.map((item, index) => (
          <TodoItem
            item={item}
            key={item.id}
            id={index}
            onDelete={delTodo}
            onEdit={editTodo}
            onHover={displayDel}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
