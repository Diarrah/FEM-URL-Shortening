import React from 'react';
import CardSection from './CardSection';

const Statistics = () =>  (
    <div className="statistics">
        <div className="statistics__textbox">
            <h1 className="statistics__heading">Advanced Statistics</h1>
            <p className="statistics__subheading">
                Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
        </div>
        <CardSection />
    </div>
)

export default Statistics;