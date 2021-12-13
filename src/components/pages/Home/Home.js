import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns"
import HomeAboutApp from "./HomeAboutApp";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrganizations from "./HomeOrganizations/";
import HomeContact from "./HomeContact";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeAboutApp/>
            <HomeAboutUs/>
            <HomeOrganizations/>
            <HomeContact/>
        </>
    );
};

export default Home;