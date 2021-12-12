import React, {useEffect, useState} from 'react';
import Title from "../../common/Title";
import {foundations} from "../../../data/organizations and foundations";

const HomeOrganizations = () => {

    // const [hhh, setHHH] = useState(document.activeElement)
    //
    // useEffect(() => {
    //     document.querySelector("#organizations > div.organizations__btns > button:nth-child(1)").focus();
    //     setHHH(document.activeElement);
    //
    // });
    // //console.log(hhh.innerText)
    //
    // const checkActive = () => {
    //     const checkActiveInterwal = setInterval(() => {
    //         //const activeElement = hhh.innerText;
    //         console.log(document.activeElement.innerText)
    //     }, 500);
    // }



    return (
        <section id="organizations" className="organizations" >
            <Title title="Komu pomagamy?"/>
            <div className="organizations__btns" >
                <button className="button">Fundacjom</button>
                <button className="button" onFocus={(e) => console.log(e.target.innerText)}>Organizacjom pozarządowym</button>
                <button className="button">Lokalnym zbiórkom</button>
            </div>
            {/*first*/}
            <p className="organizations__content">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ul>
                {foundations.map((elem, index) => {
                    return <li className="list__element" key={index}>
                        <div className="element__field">
                            <span>{elem.name}</span>
                            <span>{elem.aim}</span>
                        </div>
                        <div>
                            <span>{elem.donation}</span>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    );
};

export default HomeOrganizations;