import React from "react";
import "./ToDoItem.css";
const ToDoItem = (props) => {
  let checkToDo = props.title !== "Completed";
  return (
    <div>
      <ul>
        {props.finalList.map((item, i) => {
          return (
            <li className="complete-item" key={i}>
              <div className="item-details">
                <p className="todo-details">{item.ToDo}</p>
                <p>{item.Quantity}</p>
                <p>{item.Amount}Rs</p>
              </div>
              <div className="item-actions">
                {checkToDo && (
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => props.onActionPress(i, "edit")}
                  />
                )}
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() =>
                    props.onActionPress(
                      i,
                      checkToDo ? "delete" : "deleteCompleted"
                    )
                  }
                />
                {checkToDo && (
                  <i
                    className="fa-solid fa-square-check"
                    onClick={() => props.onActionPress(i, "complete")}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoItem;
