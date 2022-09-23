import React from "react";
import "./ExpenseList.css";
import ToDoBox from "./ToDoBox";
const ExpenseList = (props) => {
  const onActionPress = (i, actionType) => {
    props.onActionPress(i, actionType);
  };
  return (
    <div className="todo-items">
      {props.toDoListRender.length > 0 && (
        <ToDoBox
          title={"To be done"}
          toBeDoneList={props.toDoListRender}
          onActionPress={onActionPress}
        />
      )}
      {props.completedList.length > 0 && (
        <ToDoBox
          title={"Completed"}
          toBeDoneList={props.completedList}
          onActionPress={onActionPress}
        />
      )}
    </div>
  );
};
export default ExpenseList;
