import React from 'react';
import place1 from './assets/img/place1.jpg';
import place2 from './assets/img/place2.jpg';
import place3 from './assets/img/place3.jpg';
import place4 from './assets/img/place4.jpg';
import place5 from './assets/img/place5.jpg';

export default function Places() {
    // Helper function to handle style changes
    const getBaseStyle = (image) => ({
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '225px',
        marginTop: '30px',
        position: 'relative',
        transition: 'transform 0.2s ease', // Smooth hover effect
    });

    // Component rendering
    const places = [
        { name: 'Bali', location: 'Indonesia', price: '2000$', image: place1 },
        { name: 'Bora Bora', location: 'Polynesia', price: '2000$', image: place2 },
        { name: 'Havali', location: 'EE.UU', price: '2000$', image: place3 },
        { name: 'Whitehaven', location: 'Australia', price: '2000$', image: place4 },
        { name: 'Hver', location: 'Croatia', price: '2000$', image: place5 },
    ];

    return (
        <div className="container d-flex flex-column align-items-center">
            <div><h2>Choose Your Place</h2></div>
            <div className="mini-container d-flex flex-column align-items-center" style={{ width: "50vw" }}>
                <div className='d-flex gap-5 flex-wrap justify-content-center'>
                    {places.map((place, index) => (
                        <div
                            key={index}
                            style={getBaseStyle(place.image)}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)'; 
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)'; 
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '5px',
                                    bottom: '10px',
                                    zIndex: '10',
                                    fontWeight: 'bolder',
                                    color: 'white',
                                    textShadow: '0 0 5px rgba(0, 0, 0, 0.8)', // Optional, for better text visibility
                                }}
                            >
                                <h4>{place.name}</h4>
                                <p>{place.location}</p>
                                <p>{place.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
