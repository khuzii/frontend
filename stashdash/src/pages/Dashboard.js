import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Protocols from '../components/Protocols';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const history = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            history.push('/');
        }
    }, [history]);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Header username={username} />
                <div className="content">
                    <Overview />
                    <Protocols />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
