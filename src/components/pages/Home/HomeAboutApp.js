import React from 'react';
import Title from "../../common/Title";
import shirt from "../../../assets/Icon-1.svg";
import bag from "../../../assets/Icon-2.svg";
import magnifier from "../../../assets/Icon-3.svg";
import reload from "../../../assets/Icon-4.svg";
import {Link} from "react-router-dom";


const HomeAboutApp = () => {
    return (
        <section id="about-app">
        <Title title="Wystarczą 4 proste kroki"/>
        <div className="about-app">

            <div className="about-app__container">
                <div className="about-app__content">
                    <img src={shirt} alt="Shirt icon"/>
                    <h3>Wybierz rzeczy</h3>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="about-app__content">
                    <img src={bag} alt="Bag icon"/>
                    <h3>Spakuj je</h3>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className="about-app__content">
                    <img src={magnifier} alt="Magnifier icon"/>
                    <h3>Zdecyduj komu <br/>
                        chcesz pomóc</h3>
                    <span>wybierz zaufane miejsce</span>
                </div>
                <div className="about-app__content">
                    <img src={reload} alt="Reload icon"/>
                    <h3>Zamów kuriera</h3>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
        </div>

            <div className="button__container">
            <Link className="button" to="/logowanie"><span>ODDAJ RZECZY</span></Link>
            </div>
        </section>
    );
};

export default HomeAboutApp;