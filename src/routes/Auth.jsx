import React, { useEffect, useState } from 'react';
import * as authService from 'firebase/auth'

const Auth = ({ isLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (event) => {
        let provider;
        if (event.currentTarget.innerHTML === "Google") {
            provider = new authService.GoogleAuthProvider();
        } else if (event.currentTarget.innerHTML === "Github") {
            provider = new authService.GithubAuthProvider();
        }
        await authService.signInWithPopup(authService.getAuth(), provider)
    };

    const onChange = (event) => {
        const {
            target: { name, value }
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        //console.log(name, value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        authService.createUserWithEmailAndPassword(authService.getAuth(), email, password).catch(error => {
            if (error === "auth/email-already-in-use") {
                console.log("이미 생성된 이메일입니다.");
            }

            console.log("유효하지 않은 Email입니다.");
            console.log(error.toString().includes("email-already-in-use)") ? "중복" : "");
        });
        //console.log("Submit!")
    }
    return (
        <div >

            <form onSubmit={onSubmit}>
                <input type="text"
                    required
                    placeholder="Email"
                    name="email"
                    onChange={onChange}
                />

                <input type="password"
                    required
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                />

                <input type="submit"
                    value="Create Account"
                />
            </form>

            <section>
                <button onClick={onLogin}>Google</button>
                <button onClick={onLogin}>Github</button>
            </section>

        </div >
    )
};

export default Auth;