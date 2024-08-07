import React from 'react';
import profileImg from '../images/profile.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src={profileImg} alt="User Profile" className="profile-img" />
                <h2 id="user-name">User Name</h2>
                <span className="badge">PRO</span>
            </div>
            <nav>
                <ul>
                    <li className="active">Stocks</li>
                    <li>Mutual Funds</li>
                    <li>Trade</li>
                </ul>
            </nav>
            <button className="logout">Log out</button>
        </div>
    );
};

export default Sidebar;
