import React from 'react';
import headerImg from "../../../assets/Home-Hero-Image.jpg"
import decoration from "../../../assets/Decoration.svg"
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return (
        <section className="homeheader">
            <img className="homeheader__img" src={headerImg} alt="Home hero image"/>
            <div className="homeheader__content">
                <h1 className="content__title">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img className="decoration" src={decoration} alt="title decoration"/>
                <div className="homeheader__btns">
                    <Link className="button" to="/logowanie"><span>ODDAJ RZECZY</span></Link>
                    <Link className="button" to="/logowanie"><span>ZORGANIZUJ ZBIÓRKĘ</span></Link>
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;