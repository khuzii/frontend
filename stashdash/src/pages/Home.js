import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState('');
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('username', username);
        history.push('/dashboard');
    };

    return (
        <div className="container">
            <h1>Welcome to StashDash</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button type="submit">Continue</button>
            </form>
        </div>
    );
};

export default Home;
