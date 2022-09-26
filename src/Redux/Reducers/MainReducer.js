import { combineReducers } from "redux";
import Reducer from "./Reducer";
import ToDoReducer from "./ToDoReducer";

export const MainReducer = combineReducers({
  toDoReducer: ToDoReducer,
  countReducer: Reducer,
});
