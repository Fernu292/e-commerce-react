
import React from 'react'

import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
    return ( 
        <div clasName="login">
            <div clasName="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" clasName="logo" />

                <h1 clasName="title">Email has been sent!</h1>
                <p clasName="subtitle">Please check your inbox for instructions on how to reset the password</p>

                <div clasName="email-image">
                    <img src="./icons/email.svg" alt="email" />
                </div>

                <button clasName="primary-button login-button">Login</button>

                <p clasName="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}
 
export default RecoveryPassword;