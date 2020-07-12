import React from "react";

function TodoItem(props) {
  return (
    <div
      className="todoItem"
      onMouseOver={() => props.onHover(props.id)}
      onMouseOut={() => props.onHover(props.id)}
    >
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
          style={{ display: props.item.editing ? "flex" : "none" }}
          className="fas fa-trash-alt"
          onClick={() => props.onDelete(props.id)}
        ></i>
      </div>
    </div>
  );
}

export default TodoItem;
