import React, { Component, Fragment } from "react";
import { Button } from "carbon-components-react";
import "../App.css";
import logo from "../logo.svg";

export default class Navbar extends Component {
	render() {
		let showLogo = (
			<Fragment>
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Rahasia Kita</h1>
			</Fragment>
		);

		let showLogout = <Button>Keluar</Button>;

		return (
			<header className="App-header">
				{this.props.isLoggedIn ? showLogout : showLogo}
			</header>
		);
	}
}
