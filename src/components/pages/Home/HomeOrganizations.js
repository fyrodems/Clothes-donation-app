import React, {useEffect} from 'react';
import Title from "../../common/Title";

const HomeOrganizations = () => {

    useEffect(() => {
        document.querySelector("#organizations > div.organizations__btns > button:nth-child(1)").focus();
    });

    return (
        <section id="organizations" className="organizations">
            <Title title="Komu pomagamy?"/>
            <div className="organizations__btns">
                <button className="button">Fundacjom</button>
                <button className="button">Organizacjom pozarządowym</button>
                <button className="button">Lokalnym zbiórkom</button>
            </div>
            
        </section>
    );
};

export default HomeOrganizations;