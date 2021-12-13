import React from 'react';
import Title from "../../common/Title";
import fb from "../../../assets/Facebook.svg";
import ig from "../../../assets/Instagram.svg"

const HomeContact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact__form">
                <form>
                    <Title title="Skontaktuj się z nami"/>
                        <div className="inputs__container">
                            <div className="form__field">
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" id="name" name="name" placeholder="Krzysztof" required/>
                            </div>
                            <div className="form__field">
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="email" id="email" name="email" placeholder="abc@xyz.pl" required/>
                            </div>
                        </div>
                        <div className="textarea__container">
                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea rows="4" id="message" name="message" required placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        </div>
                    <button className="button">Wyślij</button>
                </form>
            </div>
            <div className="contact__footer">
                <span></span>
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