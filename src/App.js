import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import { useSelector, useDispatch } from "react-redux";
import {
  COMPLETE_TODO,
  DELETE_COMPLETED_TODO,
  UPDATE_TODO,
} from "./Redux/Actions";
const App = (props) => {
  const toDoList = useSelector((state) => state?.toDoReducer?.toDoList);
  const completedList = useSelector(
    (state) => state?.toDoReducer?.completedList
  );
  const dispatch = useDispatch();
  const submitToDoHandler = (toDoDetails) => {
    if (actionType == "edit") {
      toDoList[activeIndex].ToDo = toDoDetails.ToDo;
      toDoList[activeIndex].Quantity = toDoDetails.Quantity;
      toDoList[activeIndex].Amount = toDoDetails.Amount;
      dispatch({ type: UPDATE_TODO, val: toDoList });
      setActionType("");
      setActiveIndex(null);
    } else {
      const addTodo = [...toDoList, toDoDetails];
      dispatch({ type: UPDATE_TODO, val: addTodo });
    }
  };

  const [activeIndex, setActiveIndex] = useState();
  const [actionType, setActionType] = useState();

  const ToDoAction = (i, actionType) => {
    if (actionType == "delete") {
      toDoList.splice(i, 1);
      dispatch({ type: UPDATE_TODO, val: toDoList });
    }
    if (actionType == "complete") {
      let newList = [toDoList[i], ...completedList];
      dispatch({ type: COMPLETE_TODO, val: newList });
      toDoList.splice(i, 1);
      dispatch({ type: UPDATE_TODO, val: toDoList });
    }
    if (actionType == "deleteCompleted") {
      completedList.splice(i, 1);
      dispatch({ type: DELETE_COMPLETED_TODO, val: completedList });
    }
    if (actionType == "edit") {
      setActiveIndex(i);
      setActionType(actionType);
    }
  };
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ExpenseForm
        onSubmitToDoDetails={submitToDoHandler}
        buttonTitle={actionType == "edit" ? "Edit ToDo" : "Add ToDo"}
        activeIndex={activeIndex}
        toDoList={toDoList}
      />
      {(toDoList.length > 0 || completedList.length > 0) && (
        <ExpenseList
          toDoListRender={toDoList}
          onActionPress={ToDoAction}
          completedList={completedList}
        />
      )}
    </div>
  );
};
export default App;
