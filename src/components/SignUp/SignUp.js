import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDoc } from '../../firebase/firebase';

import './SignUp.scss';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}
	
	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password!==confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			createUserProfileDoc(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({[name]: value});
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className='sign-up'>
				SIGN UP
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						required
						label="name"
						handleChange={this.handleChange}
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						required
						label="email"
						handleChange={this.handleChange}
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						required
						label="password"
						handleChange={this.handleChange}
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						required
						label="confirm password"
						handleChange={this.handleChange}
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp;