import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';
import '../Header/Header.css'
import Welcome from './Welcome';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='home-container'>
                <Welcome></Welcome>
            </div>
            
        </div>
    );
};

export default Home;