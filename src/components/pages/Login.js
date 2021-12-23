import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../common/Title";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Wpisz swój email!";
    } else if (!regex.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
    }
    if (!values.password) {
      errors.password = "Wpisz swoje hasło!";
    } else if (values.password.length < 6) {
      errors.password = "Podane hasło jest za krótkie";
    }
    return errors;
  };

  return (
    <section className="login">
      <Title title="Zaloguj się" />
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="login__success">
          Jesteś zalogowany jako {formValues.email}
        </div>
      ) : null}

      <form className="login__container" onSubmit={handleSubmit}>
        <div className="login__field">
          <label htmlFor="email">Email</label>
          <input
            className={
              !!formErrors.email ? "login__input error" : "login__input"
            }
            name="email"
            type="text"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email ? (
            <span className="login__error">{formErrors.email}</span>
          ) : null}

          <label htmlFor="password">Hasło</label>
          <input
            className={
              !!formErrors.password ? "login__input error" : "login__input"
            }
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password ? (
            <span className="login__error">{formErrors.password}</span>
          ) : null}
        </div>
        <div className="login__btns">
          <Link to="/rejestracja" className="login__btn">
            Załóż konto
          </Link>
          <button className="login__btn">Zaloguj się</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
