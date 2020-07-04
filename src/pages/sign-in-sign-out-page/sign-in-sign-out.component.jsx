import React from 'react';
import './sign-in-sign-out.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInSignUpPage = () => {
    return (
        <div className="sign-in-sign-up">
            SIGN IN
            <SignIn/>
        </div>
    );
}

export default SignInSignUpPage;