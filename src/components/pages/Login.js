import React from 'react';
import Title from "../common/Title";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <Title title="Zaloguj się"/>
            <div className="login__container">
                <div className="login__field">
                    <label htmlFor="email">Email</label>
                    <input name="email" className="login__input" type="email" />
                    <label htmlFor="password">Hasło</label>
                    <input name="password" className="login__input" type="password" />
                </div>
                <div className="login__btns">
                    <Link to="/rejestracja" className="login__btn">Załóż konto</Link>
                    <button className="login__btn">Zaloguj się</button>
                </div>
            </div>
        </section>
    );
};

export default Login;