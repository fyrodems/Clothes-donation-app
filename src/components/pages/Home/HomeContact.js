import React, { useEffect, useState } from "react";
import Title from "../../common/Title";
import fb from "../../../assets/Facebook.svg";
import ig from "../../../assets/Instagram.svg";

const HomeContact = () => {
  const initialValues = { name: "", email: "", message: "" };
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

  useEffect(() => {
    if (formErrors.name) {
      document
        .querySelector(".error1")
        .previousElementSibling.classList.add("error");
    } else if (!formErrors.name) {
      document
        .querySelector(".error1")
        .previousElementSibling.classList.remove("error");
    }
    if (formErrors.email) {
      document
        .querySelector(".error2")
        .previousElementSibling.classList.add("error");
    } else if (!formErrors.email) {
      document
        .querySelector(".error2")
        .previousElementSibling.classList.remove("error");
    }
    if (formErrors.message) {
      document
        .querySelector(".error3")
        .previousElementSibling.classList.add("error");
    } else if (!formErrors.message) {
      document
        .querySelector(".error3")
        .previousElementSibling.classList.remove("error");
    }
  }, [formErrors, isSubmit]);

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
    } else if (values.message.length < 12) {
      errors.message = "Twoja wiadomość jest za krótka!";
    }
    return errors;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__form">
        <form onSubmit={handleSubmit}>
          <Title title="Skontaktuj się z nami" />
          <div className="inputs__container">
            <div className="form__field">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Krzysztof"
                value={formValues.name}
                onChange={handleChange}
              />
              <span className="contact__error error1">{formErrors.name}</span>
            </div>
            <div className="form__field">
              <label htmlFor="email">Wpisz swój email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="abc@xyz.pl"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="contact__error error2">{formErrors.email}</span>
            </div>
          </div>
          <div className="textarea__container">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              rows="4"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <span className="contact__error error3">{formErrors.message}</span>
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
