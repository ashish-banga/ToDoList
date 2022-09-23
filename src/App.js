// import React from "react";
// import { connect } from "react-redux";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <div>Count: {this.props.count}</div>
//         <button onClick={() => this.props.onAdd()}>Add</button>
//         <button onClick={this.props.onSub}>Sub</button>
//       </>
//     );
//   }
// }

// // providing updated State to the component through the store.

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: () => dispatch({ type: "ADD" }),
//     onSub: () => dispatch({ type: "SUBTRACT" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";

const App = (props) => {
  const ToDoItems = [
    { ToDo: "Buy Apple", Quantity: "2", Amount: "300" },
    { ToDo: "Buy Mango", Quantity: "3", Amount: "100" },
    { ToDo: "Buy Milk", Quantity: "1", Amount: "500" },
  ];
  const [toDoList, setToDoList] = useState(ToDoItems);
  const submitToDoHandler = (toDoDetails) => {
    if (actionType == "edit") {
      toDoList[activeIndex].ToDo = toDoDetails.ToDo;
      toDoList[activeIndex].Quantity = toDoDetails.Quantity;
      toDoList[activeIndex].Amount = toDoDetails.Amount;
      setToDoList([...toDoList]);
      setActionType("");
    } else {
      setToDoList([...toDoList, toDoDetails]);
    }
  };

  console.log("toDoList", toDoList);
  const [completedList, setCompletedList] = useState([]);
  const [activeIndex, setActiveIndex] = useState();
  const [actionType, setActionType] = useState();
  useEffect(() => {
    console.log("Use Effect use");
  }, [toDoList]);
  const ToDoAction = (i, actionType) => {
    console.log(19, i, actionType, toDoList[i]);
    if (actionType == "delete") {
      toDoList.splice(i, 1);
      setToDoList([...toDoList]);
    }
    if (actionType == "complete") {
      setCompletedList([toDoList[i], ...completedList]);
      toDoList.splice(i, 1);
      setToDoList([...toDoList]);
    }
    if (actionType == "deleteCompleted") {
      completedList.splice(i, 1);
      setCompletedList([...completedList]);
    }
    if (actionType == "edit") {
      setActiveIndex(i);
      setActionType(actionType);
    }
  };
  console.log(29, completedList);

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
