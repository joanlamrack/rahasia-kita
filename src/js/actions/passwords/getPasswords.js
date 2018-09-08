import {
	FETCH_PASSWORDS_FAILED,
	FETCH_PASSWORDS_SUCCESS,
	FETCH_PASSWORDS_LOADING
} from "../../constants/passwords";
import masterctrl from "../../../controllers";

function passwordsFetchError(error) {
	return {
		type: FETCH_PASSWORDS_FAILED,
		payload: error
	};
}

function passwordFetchSuccess(passwords) {
	return {
		type: FETCH_PASSWORDS_SUCCESS,
		payload: passwords
	};
}

function passwordFetchLoading() {
	return {
		type: FETCH_PASSWORDS_LOADING
	};
}

function getPasswordAction(userUid) {
	return dispatch => {
		dispatch(passwordFetchLoading());
		masterctrl.passwordController
			.getAllPassword(userUid)
			.then(passwords => {
				dispatch(passwordFetchSuccess(passwords));
			})
			.catch(err => {
				dispatch(passwordsFetchError(err));
			});
	};
}


export default { passwordFetchLoading, passwordFetchSuccess, passwordsFetchError, getPasswordAction };
