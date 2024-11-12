/*something */

import React from 'react';
import './searchResults.css';
import future1 from './Images/future1.jpg'; // Example import - replace or add as needed
import future2 from './Images/future2.jpg';
import future3 from './Images/future3.jpg';
import future4 from './Images/future4.jpg';
import future5 from './Images/future5.jpg';
import future6 from './Images/future6.jpg';
import future7 from './Images/future7.jpg';
import future8 from './Images/future8.jpg';
import future9 from './Images/future9.jpg';
import future10 from './Images/future10.jpg';
import future11 from './Images/future11.jpg';
import future12 from './Images/future12.jpg';
import future13 from './Images/future13.jpg';
import future14 from './Images/future14.jpg';
import future15 from './Images/future15.jpg';
import future16 from './Images/future16.jpg';

// Continue adding images as necessary

const SearchResults = () => {
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
                <button type="button" className="cart-button">Cart</button>
                <button className="profile-button">Profile</button>
            </header>

            <h4 className='searching-for-text'>Searching for Futuristic</h4>

            <div className="grid-container">
                {/* Manually creating grid items - similar to the landing page */}
                <div className="grid-item">
                    <img src={future1} alt="Item 1" />
                    <h3>Dupli Casa, Germany</h3>
                    <p>Price: $1,000/day</p>
                </div>
                <div className="grid-item">
                    <img src={future2} alt="Item 2" />
                    <h3>House on the Flight of Birds, Portugal</h3>
                    <p>Price: $750/day</p>
                </div>
                <div className="grid-item">
                    <img src={future3} alt="Item 3" />
                    <h3>Croft House, Australia</h3>
                    <p>Price: $1,250/day</p>
                </div>
                <div className="grid-item">
                    <img src={future4} alt="Item 3" />
                    <h3>Capital Hill Residence, Russia</h3>
                    <p>Price: $750/day</p>
                </div>
                <div className="grid-item">
                    <img src={future5} alt="Item 3" />
                    <h3>Green Greenberg Green House, USA</h3>
                    <p>Price: $600/day</p>
                </div>
                <div className="grid-item">
                    <img src={future6} alt="Item 3" />
                    <h3>Pinwheel, Italy</h3>
                    <p>Price: $600/day</p>
                </div>
                <div className="grid-item">
                    <img src={future7} alt="Item 3" />
                    <h3>Shapeshifter, USA</h3>
                    <p>Price: $750/day</p>
                </div>
                <div className="grid-item">
                    <img src={future8} alt="Item 3" />
                    <h3>Crossed House, Spain</h3>
                    <p>Price: $1,500/day</p>
                </div>
                <div className="grid-item">
                    <img src={future9} alt="Item 3" />
                    <h3>Klein Bottle House, Australia</h3>
                    <p>Price: $650/day</p>
                </div>
                <div className="grid-item">
                    <img src={future10} alt="Item 3" />
                    <h3>Wave House, Finland</h3>
                    <p>Price: $500/day</p>
                </div>
                <div className="grid-item">
                    <img src={future11} alt="Item 3" />
                    <h3>100 Riley Rd, USA</h3>
                    <p>Price: $800/day</p>
                </div>
                <div className="grid-item">
                    <img src={future12} alt="Item 3" />
                    <h3>4246 Pomona Ave, USA</h3>
                    <p>Price: $1,000/day</p>
                </div>
                <div className="grid-item">
                    <img src={future13} alt="Item 3" />
                    <h3>British Virgin Islands</h3>
                    <p>Price: $600/day</p>
                </div>
                <div className="grid-item">
                    <img src={future14} alt="Item 3" />
                    <h3>The Retreat, USA</h3>
                    <p>Price: $1,500/day</p>
                </div>
                <div className="grid-item">
                    <img src={future15} alt="Item 3" />
                    <h3>USA</h3>
                    <p>Price: $1,300/day</p>
                </div>
                <div className="grid-item">
                    <img src={future16} alt="Item 3" />
                    <h3>USA</h3>
                    <p>Price: $1,200/day</p>
                </div>
                {/* Continue creating grid items as needed */}
            </div>
        </div>
    );
};

export default SearchResults;
