import React from 'react';
import Banner from './Banner';
import StatsSection from './StatsSection';
import ReviewSection from './ReviewSection';
import InfiniteMarquee from './InfiniteMarquee';

const Home = () => {
    return (
        <div>
            <Banner/>
            <StatsSection/>
            <ReviewSection/>
            <InfiniteMarquee/>
        </div>
    );
};

export default Home;