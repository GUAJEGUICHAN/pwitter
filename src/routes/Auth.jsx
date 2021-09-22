import React from 'react';
import * as authService from 'firebase/auth'

const Auth = (props) => {
    const onLogin = async (event) => {
        let provider;
        if (event.currentTarget.innerHTML === "Google") {
            provider = new authService.GoogleAuthProvider();
        } else if (event.currentTarget.innerHTML === "Github") {
            provider = new authService.GithubAuthProvider();
        }
        await authService.signInWithPopup(authService.getAuth(), provider)
    };


    return (
        <div>
            <button onClick={onLogin}>Google</button>
            <button onClick={onLogin}>Github</button>
        </div >
    )
};

export default Auth;