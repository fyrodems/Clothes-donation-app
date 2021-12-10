import React from 'react';
import {Link} from 'react-scroll'

const ScrollLink = ({path, text}) => {
    return (
        <Link to={path} spy={true} smooth={true}>{text}</Link>
    );
};

export default ScrollLink;