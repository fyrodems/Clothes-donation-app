import React from 'react';
import Title from "../../common/Title";

const HomeContact = () => {
    return (
        <section id="contact" className="contact">
        <div className="contact__form">
            <Title title="Skontaktuj się z nami"/>
            <form>
                <label htmlFor="name">Wpisz swoje imię</label>
                <input type="text" id="name" name="name" placeholder="Krzysztof" required/>
                <label htmlFor="email">Wpisz swój email</label>
                <input type="email" id="email" name="email" placeholder="abc@xyz.pl" required/>
                <label htmlFor="message">Wpisz swoją wiadomość</label>
                <input type="text" id="message" name="message"  required placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                <button className="button"><span>Wyślij</span></button>
            </form>
        </div>
        </section>
    );
};

export default HomeContact;