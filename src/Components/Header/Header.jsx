import React from 'react';
import './Header.css'
import BackgroundVideo from '../../assets/video/home-text-transcode.mp4'

const Header = () => {
    return (
        <div className='header'>
            <video src={BackgroundVideo} autoPlay loop muted />
            <div className="header-contents">
                <p>Welcome to Savoy Distribution</p>
                <h2>Grow your business <br /> with us</h2>
                <button>SHOP NOW</button>
            </div>
        </div>
    );
};

export default Header;