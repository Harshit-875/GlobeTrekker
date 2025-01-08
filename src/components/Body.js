import React from 'react';
import img from './assets/img/home2.jpg';

export default function Body() {
    return (
        <div style={{width:"100%",height:"80vh"}} >
            <div
                className="home__data text-white"
                data-sr-id="1"
                style={{
                    visibility: "visible",
                    opacity: 1,
                    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transition: "opacity 2.8s cubic-bezier(0.5, 0, 0, 1), transform 2.8s cubic-bezier(0.5, 0, 0, 1)",
                    marginTop: "60px"
                }}
            >
                <span className="home__data-subtitle">Discover your place</span>
                <h1 style={{ fontSize: "64px" }} className="home__data-title">
                    Explore The <br /> Best <b>Beautiful <br /> Beaches</b>
                </h1>
                <a href="/" className="button text-white">
                    Explore
                </a>
            </div>

            {/* Mini-container */}
            <div
                style={{
                    background: "rgb(20 80 92)",
                    color: "white",
                    position: "absolute",
                    top: "400px", // Adjust top position as needed
                    left: "70%",
                    transform: "translateX(-50%)", // Center horizontally
                    width: "20%",  // Adjust width as needed
                    padding: "20px",
                    borderRadius: "8px",  // Optional: adds rounded corners
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Optional: adds a subtle shadow
                    zIndex: 10,  // Ensure it appears above other content
                }}
                className="mini-container "
            >
                <div className="content" style={{ fontSize: "20px", marginBottom: "10px" }}>
                    5 best places to visit = 
                    <a className='text-white fs-6' href="/">More &rarr;</a>
                </div>
                <div className="img zoom-img" style={{ marginBottom: "10px",cursor: "pointer",
                            transition: "transform 0.5s ease-in-out" }}>
                    <img src={img} alt="" style={{ width: "60%", borderRadius: "8px" }} />
                </div>
            </div>
        </div>
    );
}
