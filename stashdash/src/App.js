import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
            </Routes>
        </Router>
    );
}

export default App;
