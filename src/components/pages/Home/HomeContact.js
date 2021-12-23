import React, { useState } from "react";
import Title from "../../common/Title";
import fb from "../../../assets/Facebook.svg";
import ig from "../../../assets/Instagram.svg";

const HomeContact = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameRegex = /^\S*$/;

    if (!values.name) {
      errors.name = "Wpisz swoje imię!";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "Podane imię jest nieprawidłowe!";
    }
    if (!values.email) {
      errors.email = "Wpisz swój email!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
    }
    if (!values.message) {
      errors.message = "Wpisz swoją wiadomość";
    } else if (values.message.length < 120) {
      errors.message = "Twoja wiadomość jest za krótka!";
    }
    return errors;
  };

  fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
    method: "POST",
    body: JSON.stringify({
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <section id="contact" className="contact">
      {/*{JSON.stringify(formValues)}*/}
      <div className="contact__form">
        <form onSubmit={handleSubmit}>
          <Title title="Skontaktuj się z nami" />
          <div className="inputs__container">
            <div className="form__field">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input
                className={!!formErrors.name ? "error" : ""}
                type="text"
                id="name"
                name="name"
                placeholder="Krzysztof"
                value={formValues.name}
                onChange={handleChange}
              />
              {formErrors.name ? (
                <span className="contact__error">{formErrors.name}</span>
              ) : null}
            </div>

            <div className="form__field">
              <label htmlFor="email">Wpisz swój email</label>
              <input
                className={!!formErrors.email ? "error" : ""}
                type="text"
                id="email"
                name="email"
                placeholder="abc@xyz.pl"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email ? (
                <span className="contact__error">{formErrors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="textarea__container">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              className={!!formErrors.message ? "error" : ""}
              rows="4"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat."
            />
            {formErrors.message ? (
              <span className="contact__error">{formErrors.message}</span>
            ) : null}
          </div>
          <button className="button">Wyślij</button>
        </form>
      </div>
      <div className="contact__footer">
        <span />
        <small>Copyright by Coders Lab</small>
        <div className="footer__social">
          <img src={fb} alt="Facebook icon" />
          <img src={ig} alt="Instagram icon" />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
