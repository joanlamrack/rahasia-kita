import React, { Component } from "react";
import { Form, FormGroup, TextInput, Button } from "carbon-components-react";
import PasswordWidget from "../components/PasswordWidget";
import { createPasswordAction } from "../js/actions/passwords";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		useruid: state.login.uid
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createPassword: (useruid, url, password, username) => {
			dispatch(
				createPasswordAction(useruid, {
					url,
					password,
					username
				})
			);
		}
	};
};

export class PasswordForm extends Component {
	constructor() {
		super();
		this.state = {
			password: "",
			username: "",
			url: "",
			enableButton: false,
			passwordPattern: [
				{
					direction:
						"Password harus memiliki setidaknya satu karakter huruf besar (upper-case)",
					pattern: /.*[A-Z].*/
				},
				{
					direction:
						"Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)",
					pattern: /.*[a-z].*/
				},
				{
					direction:
						"Password harus memiliki setidaknya satu karakter special (#$@!%))",
					pattern: /.*\W.*/
				},
				{
					direction: "Password harus memiliki setidaknya satu angka",
					pattern: /.*\d.*/
				},
				{
					direction: "Password harus memiliki panjang lebih dari 5 karakter",
					pattern: /.{5,}/
				}
			]
		};
	}

	updateButtonStatus = () => {
		let status = this.state.passwordPattern
			.map(x => x.pattern)
			.reduce((acc, cur) => {
				return acc && cur.test(this.state.password);
			}, true);
		this.setState({
			enableButton: status
		});
	};

	handlePassword = e => {
		this.setState(
			{
				password: e.target.value
			},
			this.updateButtonStatus
		);
	};

	handleUsername = e => {
		this.setState({
			username: e.target.value
		});
	};

	handleUrl = e => {
		this.setState({
			url: e.target.value
		});
	};

	handleSubmit = e => {
		this.props.createPassword(
			this.props.useruid,
			this.state.url,
			this.state.password,
			this.state.username
		);
		this.setState({
			username: "",
			url: "",
			password: ""
		});
	};

	render() {
		return (
			<Form>
				<FormGroup legendText="">
					<TextInput
						id="url"
						onChange={this.handleUrl}
						type="text"
						required
						labelText="Tautan"
						value={this.state.url}
					/>
					<TextInput
						id="username"
						onChange={this.handleUsername}
						type="text"
						required
						labelText="Username"
						value={this.state.username}
					/>
					<TextInput
						id="password"
						onChange={this.handlePassword}
						type="password"
						required
						labelText="Kata Sandi"
						value={this.state.password}
					/>
				</FormGroup>
				<PasswordWidget
					passwordPattern={this.state.passwordPattern}
					stringToTest={this.state.password}
				/>
				<Button disabled={!this.state.enableButton} onClick={this.handleSubmit}>
					Tambah
				</Button>
			</Form>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PasswordForm);
