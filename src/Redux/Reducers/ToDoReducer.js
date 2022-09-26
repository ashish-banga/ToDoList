import { DELETE_COMPLETED_TODO, COMPLETE_TODO, UPDATE_TODO } from "../Actions";

const initialState = {
  toDoList: [
    { ToDo: "Buy Apple", Quantity: "2", Amount: "300" },
    { ToDo: "Buy Mango", Quantity: "3", Amount: "100" },
    { ToDo: "Buy Milk", Quantity: "1", Amount: "500" },
  ],
  completedList: [],
};

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        ...state,
        toDoList: [...action?.val],
      };
    case DELETE_COMPLETED_TODO:
      return {
        ...state,
        completedList: [...action?.val],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        completedList: [...action?.val],
      };
    default:
      return state;
  }
};
export default ToDoReducer;
