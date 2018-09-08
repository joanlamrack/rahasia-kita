import { FETCH_TODOS_FAILED, FETCH_TODOS_SUCCESS, FETCH_TODOS } from "../constants/todos";



function todosFetchError(error) {
	return {
		type: FETCH_TODOS_FAILED,
		payload: error
	};
}

function todoFetchSuccess(todos) {
	return {
		type: FETCH_TODOS_SUCCESS,
		payload: todos
	};
}

function todoFetchLoading(){
	return {
		type: FETCH_TODOS
	}
}

function getTodoAction(userUid){
	return dispatch =>{
		dispatch(todoFetchLoading);

	}
}