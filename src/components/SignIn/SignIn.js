import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase';

import './SignIn.scss';

class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			password: '',
			email: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({email: '', password: ''})
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		
		this.setState({[name]: value});
	}

	render() {
		const { email, password } = this.state;

		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email" 
						type="email" 
						value={email} 
						required
						label="email"
						handleChange={this.handleChange}
					/>
					<FormInput 
						name="password" 
						type="password" 
						value={password} 
						required
						label="password"
						handleChange={this.handleChange}
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;