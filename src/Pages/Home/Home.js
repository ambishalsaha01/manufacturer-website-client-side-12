import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Faq from './Faq';
import Parts from './Parts';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;