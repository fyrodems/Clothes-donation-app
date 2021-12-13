import React from 'react';
import decoration from "../../assets/Decoration.svg";

const Title = ({title}) => {
    return (
        <div className="title">
         <h2 className="title__text">{title}</h2>
         <img className="title__img" src={decoration} alt="Decoration" />
        </div>
    );
};

export default Title;