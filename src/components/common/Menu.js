import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";

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
                            <MenuItem className="list__element"><Link to="/oddaj-rzeczy">Start</Link> </MenuItem>
                            <MenuItem className="list__element"><Link to="/oddaj-rzeczy">O co chodzi?</Link> </MenuItem>
                            <MenuItem className="list__element"><Link to="/oddaj-rzeczy">O nas</Link> </MenuItem>
                            <MenuItem className="list__element"><Link to="/oddaj-rzeczy">Fundacja i organizacje</Link> </MenuItem>
                            <MenuItem className="list__element"><Link to="/oddaj-rzeczy">Kontakt</Link> </MenuItem>

                        </ul>
                    </nav>
                </div>
            </header>

        </>
    );
}