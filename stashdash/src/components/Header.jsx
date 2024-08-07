import React from 'react';

const Header = ({ username }) => {
    return (
        <header>
            <h1>Welcome back, <span id="header-name">{username}</span>!</h1>
            <p>Take a look at the updated StashDash overview</p>
        </header>
    );
};

export default Header;
