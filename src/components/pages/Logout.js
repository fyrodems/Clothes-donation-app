import React from 'react';
import Title from "../common/Title";
import {Link} from "react-router-dom";

const Logout = () => {

    const stylesLogout = {
        "padding": "100px",
        "display": "grid",
        "place-items": "center"
    }

    return (
        <section style={stylesLogout} className="logout">
            <Title title="Wylogowanie nastąpiło pomyślnie!" />
            <Link to="/" className="button">Strona główna</Link>
        </section>
    );
};

export default Logout;