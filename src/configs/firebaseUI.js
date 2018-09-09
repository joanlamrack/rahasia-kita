import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import {auth} from "./firebase";


export const uiConfig = {
	signInFlow:"popup",
	signInOptions:[
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		firebase.auth.TwitterAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID,
	]
};

export const ui = new firebaseui.auth.AuthUI(auth);
