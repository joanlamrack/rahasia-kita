import { combineReducers } from "redux";
import TodoReducer from "./todos";

export default combineReducers({
	todos: TodoReducer
});
