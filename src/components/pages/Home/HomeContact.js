import React, {useEffect, useState} from 'react';
import Title from "../../common/Title";
import fb from "../../../assets/Facebook.svg";
import ig from "../../../assets/Instagram.svg"

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
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            document.querySelectorAll("input").forEach((elem) => {
                elem.classList.remove("error");
            })
            document.querySelector("textarea").classList.remove("error");
        } else if (Object.keys(formErrors).length === 1) {
            if (Object.keys(formErrors)[0] === "name") {
                document.querySelectorAll("input")[0].classList.add("error");
                document.querySelectorAll("input")[1].classList.remove("error");
                document.querySelector("textarea").classList.remove("error");
            } else if (Object.keys(formErrors)[0] === "email") {
                document.querySelectorAll("input")[0].classList.remove("error");
                document.querySelectorAll("input")[1].classList.add("error");
                document.querySelector("textarea").classList.remove("error");
            } else {
                document.querySelectorAll("input")[0].classList.remove("error");
                document.querySelectorAll("input")[1].classList.remove("error");
                document.querySelector("textarea").classList.add("error");
            }
        } else if (Object.keys(formErrors).length === 2) {
            if (Object.keys(formErrors)[0] === "name" && Object.keys(formErrors)[1] === "email") {
                document.querySelectorAll("input")[0].classList.add("error");
                document.querySelectorAll("input")[1].classList.add("error");
                document.querySelector("textarea").classList.remove("error");
            } else if (Object.keys(formErrors)[0] === "name" && Object.keys(formErrors)[1] === "message") {
                document.querySelectorAll("input")[0].classList.add("error");
                document.querySelectorAll("input")[1].classList.remove("error");
                document.querySelector("textarea").classList.add("error");
            } else if (Object.keys(formErrors)[0] === "email" && Object.keys(formErrors)[1] === "message") {
                document.querySelectorAll("input")[0].classList.remove("error");
                document.querySelectorAll("input")[1].classList.add("error");
                document.querySelector("textarea").classList.add("error");
            }
        } else if (Object.keys(formErrors).length === 3) {
            document.querySelectorAll("input").forEach((elem) => {
                elem.classList.add("error");
            })
            document.querySelector("textarea").classList.add("error");
        }
    }, [formErrors, isSubmit]);

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const nameRegex = /^\S*$/;

        if (!values.name) {
            errors.name = "Wpisz swoje imię!"
        } else if (!nameRegex.test(values.name)) {
            errors.name = "Podane imię jest nieprawidłowe!"
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
                    <Title title="Skontaktuj się z nami"/>
                        <div className="inputs__container">
                            <div className="form__field">
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" id="name" name="name" placeholder="Krzysztof" value={formValues.name} onChange={handleChange}/>
                                <span className="contact__error">{formErrors.name}</span>
                            </div>
                            <div className="form__field">
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="text" id="email" name="email" placeholder="abc@xyz.pl" value={formValues.email} onChange={handleChange} />
                                <span className="contact__error">{formErrors.email}</span>
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
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat."/>
                            <span className="contact__error">{formErrors.message}</span>
                        </div>
                    <button className="button">Wyślij</button>
                </form>
            </div>
            <div className="contact__footer">
                <span/>
                <small>Copyright by Coders Lab</small>
                <div className="footer__social">
                    <img src={fb} alt="Facebook icon"/>
                    <img src={ig} alt="Instagram icon"/>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;