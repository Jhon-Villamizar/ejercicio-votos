import React, { useState } from 'react';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import './login.scss';

export default function Login() {

	const [loginView, setLoginView] = useState(true);
	var show;
	const handlerLogin = () => {
		setLoginView(!loginView)
	}
	if (loginView == true) {
		show = <Signin handlerLogin={handlerLogin} ></Signin>
	} else {
		show = <Signup handlerLogin={handlerLogin} ></Signup>
	}


	return (
		<div className="content-login">
			{show}
		</div>
	)
}