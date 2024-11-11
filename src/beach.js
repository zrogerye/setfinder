/*something */

import React from 'react';
import './beach.css';
import item1 from './Images/item1.jpg'; // Example import - replace or add as needed
import item2 from './Images/item2.jpg';
import item3 from './Images/item3.jpg';
// Continue adding images as necessary

const Beach = () => {
    return (
        <div className="search-results-container">

            <header className="navbar">
                <div className="logo" onClick={() => window.location.href = '/'}>
                    <span>SetFinder</span>
                </div>
                <div className="search-bar-container">
                    <input type="text" placeholder="Search" className="search-bar-input" />
                    {/* <Link to="/searchResults"> */}
                        <button type="button" className="search-bar-button">&#128269;</button>
                    {/* </Link> */}

                </div>
                <button className="profile-button">Profile</button>
            </header>

            <h4 className='searching-for-text'>Searching for Beach</h4>

            <div className="grid-container">
                {/* Manually creating grid items - similar to the landing page */}
                <div className="grid-item">
                    <img src={item1} alt="Item 1" />
                    <h3>Item 1</h3>
                    <p>Price: $100</p>
                </div>
                <div className="grid-item">
                    <img src={item2} alt="Item 2" />
                    <h3>Item 2</h3>
                    <p>Price: $200</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                <div className="grid-item">
                    <img src={item3} alt="Item 3" />
                    <h3>Item 3</h3>
                    <p>Price: $300</p>
                </div>
                {/* Continue creating grid items as needed */}
            </div>
        </div>
    );
};

export default Beach;
