import React from 'react'
import Title from "../../common/Title";
import people from "../../../assets/People.jpg"
import signature from "../../../assets/Signature.svg"


const HomeAboutUs = () => {
    return (
        <section id="about-us" className="about-us">
            <div className="about-us__content">
                <Title title="O nas"/>
                <p className="content__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="Signature"/>
            </div>
            <img className="about-us__img" src={people} alt="People"/>
            
        </section>
    );
};

export default HomeAboutUs;