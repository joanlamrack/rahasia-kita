import {
	FETCH_TODOS,
	DELETE_TODOS,
	ADD_TODO,
	UPDATE_TODO,
	ALL_TODOS,
	FETCH_TODOS_FAILED,
	FETCH_TODOS_SUCCESS
} from "../constants/todos";

const initialState = {
	data: [],
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
	case ALL_TODOS:
		return { state };
	case FETCH_TODOS_FAILED:
		return { ...initialState, error: action.payload };
	case FETCH_TODOS_SUCCESS:
		return { ...initialState, data: action.payload };
	case FETCH_TODOS:
		return { ...initialState, loading: true };
	case DELETE_TODOS:
		return { ...initialState, data: action.payload };
	case ADD_TODO:
		return { ...initialState, data: action.payload };
	case UPDATE_TODO:
		return { ...initialState, data: action.payload };
	default:
		return state;
	}
};
