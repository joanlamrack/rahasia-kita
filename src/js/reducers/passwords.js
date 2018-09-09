import {
	INITIALIZE,
	FETCH_PASSWORDS_FAILED,
	FETCH_PASSWORDS_SUCCESS,
	FETCH_PASSWORDS_LOADING,
	DELETE_PASSWORDS_FAILED,
	DELETE_PASSWORDS_SUCCESS,
	DELETE_PASSWORDS_LOADING,
	FETCH_PASSWORDS,
	DELETE_PASSWORDS,
	UPDATE_PASSWORD,
	UPDATE_PASSWORD_FAILED,
	UPDATE_PASSWORD_LOADING,
	UPDATE_PASSWORD_SUCCESS,
	ADD_PASSWORD,
	ADD_PASSWORD_FAILED,
	ADD_PASSWORD_LOADING,
	ADD_PASSWORD_SUCCESS
} from "../constants/passwords";

const initialState = {
	data: [],
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
	case INITIALIZE:
	case DELETE_PASSWORDS:
	case FETCH_PASSWORDS:
	case UPDATE_PASSWORD:
	case ADD_PASSWORD:
		return { ...state };
	case DELETE_PASSWORDS_FAILED:
	case FETCH_PASSWORDS_FAILED:
	case UPDATE_PASSWORD_FAILED:
	case ADD_PASSWORD_FAILED:
		return { ...state, error: action.payload };
	case DELETE_PASSWORDS_LOADING:
	case FETCH_PASSWORDS_LOADING:
	case UPDATE_PASSWORD_LOADING:
	case ADD_PASSWORD_LOADING:
		return { ...state, loading: true };
	case DELETE_PASSWORDS_SUCCESS:
	case FETCH_PASSWORDS_SUCCESS:
	case UPDATE_PASSWORD_SUCCESS:
	case ADD_PASSWORD_SUCCESS:
		return { ...initialState, data: action.payload };
	default:
		return state;
	}
};