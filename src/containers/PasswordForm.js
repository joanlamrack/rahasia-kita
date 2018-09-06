import React, { Component } from "react";
import { Form, FormGroup , TextInput, Button} from "carbon-components-react";
import PasswordWidget from "../components/PasswordWidget";

export class PasswordForm extends Component {
	constructor() {
		super();
		this.state = {
			password:"",
			username:"",
			url:"",
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

	handlePassword = (e)=>{
		this.setState({
			password:e.target.value
		})
	}

	handleUsername = (e)=>{
		this.setState({
			username:e.target.value
		})
	}

	handleUrl = (e)=>{
		this.setState({
			url:e.target.value
		})
	}

	handleSubmit = (e) =>{
		console.log({...this.state, passwordPattern:""})
	}

	render() {
		return (
			<Form>
				<FormGroup>
					<TextInput id="url" onChange={this.handleUrl} type="text" required labelText="Tautan"></TextInput>
					<TextInput id="username" onChange={this.handleUsername} type="text" required labelText="Username"></TextInput>
					<TextInput id="password" onChange={this.handlePassword} type="password" required labelText="Kata Sandi"></TextInput>
				</FormGroup>
				<PasswordWidget passwordPattern={this.state.passwordPattern} stringToTest={this.state.password} />
				<Button onClick={this.handleSubmit}>Submit</Button>
			</Form>
		);
	}
}

export default PasswordForm;