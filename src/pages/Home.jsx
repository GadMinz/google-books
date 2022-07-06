import React from 'react';
import homeBook from '../assets/img/home-book.svg'
const Home = () => {
    return (
        <div className='home'>
            <div className="home__image">
                <img width={256} src={homeBook} alt="home-book"/>
            </div>
            <h2>All books in the world</h2>
        </div>
    );
};

export default Home;
