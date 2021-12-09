import React from 'react';
import HomeHeader from "../homepage-components/HomeHeader";
import HomeThreeColumns from "../homepage-components/HomeThreeColumns"
import HomeAboutApp from "../homepage-components/HomeAboutApp";
import HomeAboutUs from "../homepage-components/HomeAboutUs";
import HomeOrganizations from "../homepage-components/HomeOrganizations";
import HomeContact from "../homepage-components/HomeContact";

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