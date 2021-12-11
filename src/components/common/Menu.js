import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import ScrollLink from "./ScrollLink";

export default function BasicMenu() {

    return (
        <>
            <header className="header__container">
                <div className="header__container-small">
                    <nav className="header__nav">
                        <ul className="nav__list1">
                            <MenuItem><Link to="/logowanie">Zaloguj</Link> </MenuItem>
                            <MenuItem className="list__element-yellow" ><Link to="/rejestracja">Załóż konto</Link> </MenuItem>
                            {/*<MenuItem className="list__element"><Link to="/wylogowano">Logout</Link> </MenuItem>*/}
                        </ul>
                        <ul className="nav__list2">
                            <MenuItem className="list__element"><Link to="/">Start</Link> </MenuItem>
                            <MenuItem className="list__element"><ScrollLink path="about-app" text="O co chodzi?"></ScrollLink></MenuItem>
                            <MenuItem className="list__element"><ScrollLink path="about-us" text="O nas"></ScrollLink></MenuItem>
                            <MenuItem className="list__element"><ScrollLink path="organizations" text="Fundacja i organizacje"></ScrollLink></MenuItem>
                            <MenuItem className="list__element"><ScrollLink path="contact" text="Kontakt"></ScrollLink></MenuItem>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    );
}