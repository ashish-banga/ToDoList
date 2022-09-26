import { createStore, combineReducers } from "redux";
import { MainReducer } from "../Reducers/MainReducer";

const store = createStore(MainReducer);
export default store;
