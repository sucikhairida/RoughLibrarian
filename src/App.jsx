// src/App.jsx
import React, { useState, useEffect } from 'react';
import { RoughlibrarianContainer } from './components/RoughlibrarianContainer';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulated data fetching
        setTimeout(() => {
            setData({
                title: 'RoughLibrarian',
                description: 'A powerful React application'
            });
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="App loading">
                <div className="spinner"></div>
                <p>Loading RoughLibrarian...</p>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </header>
            <main>
                <RoughlibrarianContainer />
            </main>
        </div>
    );
}

export default App;
