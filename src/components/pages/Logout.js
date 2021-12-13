import React from 'react';
import { Link } from "react-router-dom";
import Title from "../common/Title";


const Logout = () => {
    return (
        <section className="logout">
            <Title title="Wylogowanie nastąpiło pomyślnie!" />
            <Link to="/" className="button">Strona główna</Link>
        </section>
    );
};

export default Logout;