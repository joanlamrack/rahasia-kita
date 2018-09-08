import { combineReducers } from "redux";
import TodoReducer from "./todos";
import LoginReducer from "./userlogin";

export default combineReducers({
	todos: TodoReducer,
	login: LoginReducer
});
