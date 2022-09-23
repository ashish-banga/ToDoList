import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoBox.css";
const ToDoBox = (props) => {
  const onActionPress = (i, actionType) => {
    props.onActionPress(i, actionType);
  };

  return (
    <div className="todo-items-list">
      <h2>{props.title}</h2>
      <ToDoItem
        finalList={props && props.toBeDoneList ? props.toBeDoneList : []}
        onActionPress={onActionPress}
        title={props.title}
      />
    </div>
  );
};

export default ToDoBox;