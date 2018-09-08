import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import masterReducer from "../reducers";

export default createStore(
	masterReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);