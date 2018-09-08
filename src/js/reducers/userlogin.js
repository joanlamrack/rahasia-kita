import { LOGIN, LOGOUT } from "../constants/userlogin";

const initialState = {
	isLoggedin: false,
	uid: ""
};

export default (state = initialState, action) => {
	switch (action.type) {
	case LOGIN:
		return { ...state, isLoggedin: true, uid: action.payload };
	case LOGOUT:
		return { ...initialState };
	default:
		return state;
	}
};
