import React from 'react';
import headerImg from "../../assets/Home-Hero-Image.jpg"
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";


const HomeHeader = () => {
    return (
        <section className="homeheader">
            <img className="homeheader__img" src={headerImg} alt="Home hero image"/>
            <div className="homeheader__content">
                <h1 className="content__title">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img className="decoration" src={decoration} alt="Decoration"/>
                <div className="homeheader__btns">
                    <button><Link to="/logowanie">ODDAJ <br/> RZECZY</Link></button>
                    <button><Link to="/logowanie">ZORGANIZUJ <br/> ZBIÓRKĘ</Link></button>
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;