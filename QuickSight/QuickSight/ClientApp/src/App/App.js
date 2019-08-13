import React from 'react';
import logo from '../Img/express.png';
import Navigation from '../components/Navigation/Navigation.js'
import './App.css';

const App = props => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <h2>aws QuickSight</h2>
                    <span>proof of concept</span>
                </div>
            </header>
            <Navigation></Navigation>
        </div>
    );
}

export default App;
