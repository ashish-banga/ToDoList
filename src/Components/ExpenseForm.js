import React, { useEffect, useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredToDo, setEnteredToDo] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const { activeIndex, toDoList } = props;
  useEffect(() => {
    let item = toDoList[activeIndex];
    let toDo = item?.ToDo ? item.ToDo : "";
    let quantity = item?.Quantity ? item.Quantity : "";
    let amount = item?.Amount ? item.Amount : "";

    setEnteredToDo({ value: toDo });
    setEnteredQuantity(quantity);
    setEnteredAmount(amount);
  }, [activeIndex]);
  const toDoChangeHandler = (event) => {
    console.log("dd", event.target.value);
    if (event.target.value) {
      setEnteredToDo((prevState) => ({
        ...prevState,
        error: true,
        errorMessage: "Please enter ToDO",
        value: event.target.value,
      }));
    } else {
      setEnteredToDo({
        value: event.target.value,
      });
    }
    // setEnteredToDo(event.target.value);
  };
  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const submitHandler = (event) => {
    if (!enteredToDo.value.trim()) {
      alert("Please enter what to do?");
      return;
    }
    if (!enteredQuantity.trim()) {
      alert("Please enter Quantity");
      return;
    }
    if (!enteredAmount.trim()) {
      alert("Please enter Amount");
      return;
    }
    event.preventDefault();
    console.log(42, enteredToDo);
    const toDoDetails = {
      ToDo: enteredToDo.value,
      Quantity: enteredQuantity,
      Amount: enteredAmount,
    };
    console.log(toDoDetails);
    props.onSubmitToDoDetails(toDoDetails);
    setEnteredToDo({ value: "" });
    setEnteredAmount("");
    setEnteredQuantity("");
  };
  let validateAddToDo = enteredAmount && enteredToDo.value && enteredQuantity;
  return (
    <form className="form_area" onSubmit={submitHandler}>
      <div className="main-div">
        <div className="input">
          <label>Todo</label>
          <input
            type="text"
            placeholder="Enter Todo"
            onChange={toDoChangeHandler}
            value={enteredToDo.value}
          />
        </div>
        {/* {enteredToDo.error && (
          <span style={{ color: "red" }}>{enteredToDo.errorMessage}</span>
        )} */}
        <div className="input">
          <label>Quantity</label>
          <input
            type="number"
            placeholder="Enter Quantity"
            onChange={quantityChangeHandler}
            value={enteredQuantity}
          />
        </div>
        <div className="input">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
      </div>
      <div className="input_actions">
        <button>Cancel</button>
        <button type="submit" disabled={!validateAddToDo}>
          {props.buttonTitle}
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
