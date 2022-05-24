import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Faq from './Faq';
import NewsLetter from './NewsLetter';
import Parts from './Parts';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <NewsLetter></NewsLetter>
            <Faq></Faq>
        </div>
    );
};

export default Home;