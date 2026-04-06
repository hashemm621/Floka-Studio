import React from 'react';
import Banner from './Banner';
import StatsSection from './StatsSection';
import ReviewSection from './ReviewSection';
import InfiniteMarquee from './InfiniteMarquee';
import PortfolioSection from './PortfolioSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatsSection/>
            <ReviewSection/>
            <InfiniteMarquee/>
            <PortfolioSection/>
        </div>
    );
};

export default Home;