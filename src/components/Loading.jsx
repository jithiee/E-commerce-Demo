import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loader-wrapper">
                {/* Main spinner ring */}
                <div className="spinner-ring">
                    <div className="ring-inner"></div>
                    <div className="ring-outer"></div>
                </div>

                {/* Orbiting dots */}
                <div className="orbiting-dots">
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                    <span className="dot dot-3"></span>
                    <span className="dot dot-4"></span>
                    <span className="dot dot-5"></span>
                    <span className="dot dot-6"></span>
                </div>

                {/* Center pulse */}
                <div className="center-pulse"></div>

                {/* Loading text */}
                <div className="loading-text">
                    <span>L</span>
                    <span>o</span>
                    <span>a</span>
                    <span>d</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span className="dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loading;