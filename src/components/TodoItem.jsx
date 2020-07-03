import React from "react";

function TodoItem(props) {
  return (
    <div className="todoItem" onMouseOver={() => console.log("he")}>
      <div>
        <input
          type="checkbox"
          name="check"
          checked={props.item.completed}
          onChange={(e) => props.onEdit(e, props.id)}
        />
        <input
          type="text"
          name="edit"
          className="todoLabel"
          value={props.item.task}
          style={{
            textDecoration: props.item.completed ? "line-through" : "none",
          }}
          onChange={(e) => props.onEdit(e, props.id)}
          disabled={props.item.completed}
        />
      </div>

      <div>
        <i
          className="fas fa-trash-alt"
          onClick={() => props.onDelete(props.id)}
        ></i>
      </div>
    </div>
  );
}

export default TodoItem;
