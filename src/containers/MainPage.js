import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import PasswordSearch from "./PasswordSearch";
import NotFound from "../components/NotFound";

export default class MainPage extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false
		};
	}
	render() {
		return (
			<Fragment>
				<Navbar isLoggedIn={this.state.isLoggedIn}/>
				<BrowserRouter>
					<Switch>
						<Route
							exact
							path="/"
							render={() =>
								this.state.isLoggedIn ? (
									<Redirect to="/dashboard" />
								) : (
									<SignIn />
								)
							}
						/>
						<Route
							path="/dashboard"
							render={() =>
								this.state.isLoggedIn ? <PasswordSearch /> : <Redirect to="/" />
							}
						/>
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Fragment>
		);
	}
}
