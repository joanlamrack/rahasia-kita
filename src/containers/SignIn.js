import React, { Component } from "react";

import { ui, uiConfig } from "../configs/firebaseUI";
import "firebaseui/dist/firebaseui.css";

export default class SignIn extends Component {
	render() {
		return <div id="firebase-auth-container" />;
	}

	componentDidMount() {
		ui.start("#firebase-auth-container", uiConfig);
	}
}
