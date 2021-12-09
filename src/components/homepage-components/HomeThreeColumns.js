import React from 'react';

const HomeThreeColumns = () => {
    return (
        <section className="home-three-columns">
            <div className="container">
            <div className="column">
                <span className="column__number">10</span>
                <h2 className="column__title">ODDANYCH WORKÓW</h2>
                <span className="column__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>

            <div className="column">
                <span className="column__number">5</span>
                <h2 className="column__title">WSPARTYCH ORGANIZACJI</h2>
                <span className="column__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>

            <div className="column">
                <span className="column__number">7</span>
                <h2 className="column__title">ZORGANIZOWANY ZBIÓREK</h2>
                <span className="column__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>
            </div>
        </section>
    );
};

export default HomeThreeColumns;