import React, { Component } from "react";
import { auth } from "../configs/firebase";
import { ui, uiConfig } from "../configs/firebaseUI";
import "firebaseui/dist/firebaseui.css";

export default class SignIn extends Component {
	render() {
		return <div id="firebase-auth-container" />;
	}

	componentDidMount() {
		ui.start("#firebase-auth-container", uiConfig);

		auth.onAuthStateChanged(function(user) {
			if (user) {
				console.log(user.uid);
				
			} else {
				console.log("no user");
			}
		});
	}
}
