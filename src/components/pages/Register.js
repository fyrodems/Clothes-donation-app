import React from 'react';
import Title from "../common/Title";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <section className="login">
            <Title title="Zaloguj się"/>
            <div className="login__container">
                <div className="login__field">
                    <label htmlFor="email">Email</label>
                    <input name="email" className="login__input" type="email" />
                    <label htmlFor="password">Hasło</label>
                    <input name="password" className="login__input" type="password" />
                    <label htmlFor="password2">Powtórz hasło</label>
                    <input name="password2" className="login__input" type="password" />
                </div>
                <div className="login__btns">
                    <Link to="/logowanie" className="login__btn">Zaloguj się</Link>
                    <button className="login__btn">Załóż konto</button>
                </div>
            </div>
        </section>
    );
};

export default Register;