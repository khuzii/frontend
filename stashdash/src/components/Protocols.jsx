import React from 'react';
const Protocols = () => {
    return (
        <div className="protocols">
            <h2>Most Brought</h2>
            <div className="protocol-chart">
                <div className="protocol">
                    <div className="protocol-circle" style={{ backgroundColor: '#4CAF50' }}>IRFC 182.41INR</div>
                </div>
                <div className="protocol">
                    <div className="protocol-circle" style={{ backgroundColor: '#FFC107' }}>Zomato 265.67INR</div>
                </div>
                <div className="protocol">
                    <div className="protocol-circle" style={{ backgroundColor: '#9C27B0' }}>Tata Steel 153.86INR</div>
                </div>
                <div className="protocol">
                    <div className="protocol-circle" style={{ backgroundColor: '#4cbbca' }}>GTL Infrastructure 2.77INR</div>
                </div>
            </div>
        </div>
    );
};

export default Protocols;
