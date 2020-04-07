import React from 'react';
import './SigninPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SigninPage = () => {
	return (
		<div className="signin">
			SIGN IN
			<SignIn />
			<SignUp />
		</div>
	)
}

export default SigninPage;
