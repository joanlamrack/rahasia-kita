import {
	FETCH_TODOS,
	DELETE_TODOS,
	ADD_TODO,
	UPDATE_TODO
} from "../constants/todos";

const initialState = {
	data:[],
	loading:false,
	error:null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case FETCH_TODOS:
		return { ...state };
	case DELETE_TODOS:
		return { ...state };
	case ADD_TODO:
		return { ...state };
	case UPDATE_TODO:
		return { ...state };
	default:
		return state;
	}
};
