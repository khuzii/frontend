import React from 'react';

const Overview = () => {
    return (
        <div className="overview">
            <div className="nifty">
                <h2 style={{color: "white"}}>NIFTY 50</h2>
                <div className="chart" id="chart1"></div>
                <p style={{color: 'white'}}>$43,35B <span className="change">+13%</span></p>
            </div>
            <div className="sensex">
                <h2 style={{color: "white"}}>SENSEX</h2>
                <div className="chart" id="chart1"></div>
                <p style={{color: 'white'}}>-4.31% <span className="change">-0.07% this month</span></p>
            </div>
            <div className="makerdom">
                <h2 style={{color: "white"}}>Maker Dominance</h2>
                <div className="chart" id="chart1"></div>
                <p style={{color: 'white'}}>15.62% <span className="change">+1.31% this month</span></p>
            </div>
        
        </div>
    );
};

export default Overview;
