/*something */

import React from 'react';
import item12 from './Images/item12.jpg'; // Example import - replace or add as needed
import horror2 from './Images/horror2.jpg';
import horror3 from './Images/horror3.jpg';
import horror4 from './Images/horror4.jpg';
import horror5 from './Images/horror5.jpg';
import horror6 from './Images/horror6.jpg';
import horror7 from './Images/horror7.jpg';
import horror8 from './Images/horror8.jpg';
import horror9 from './Images/horror9.jpg';
import horror10 from './Images/horror10.jpg';
import horror11 from './Images/horror11.jpg';
import horror12 from './Images/horror12.jpg';
import horror13 from './Images/horror13.jpg';
import horror14 from './Images/horror14.jpg';
import horror15 from './Images/horror15.jpg';
import horror16 from './Images/horror16.jpg';
// Continue adding images as necessary

const Horror = () => {

    //go to top of the screen
    window.scrollTo(0, 0);

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

            <h4 className='searching-for-text'>Searching for Horror</h4>

            <div className="grid-container">
                {/* Manually creating grid items - similar to the landing page */}
                <div className="grid-item">
                    <img src={item12} alt="Item 1" />
                    <h3>Eastern State Penitentiary, USA</h3>
                    <p>Price: $2,500/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror2} alt="Item 2" />
                    <h3>Waverly Hills Sanatorium, USA</h3>
                    <p>Price: $2,000/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror3} alt="Item 3" />
                    <h3>Monte Cristo Homestead, Australia</h3>
                    <p>Price: $800/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror4} alt="Item 3" />
                    <h3>Castle of Good Hope, South Africa</h3>
                    <p>Price: $1,200/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror5} alt="Item 3" />
                    <h3>The Tower of London, England</h3>
                    <p>Price: $1,200/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror6} alt="Item 3" />
                    <h3>Ancient Ram Inn, England</h3>
                    <p>Price: $900/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror7} alt="Item 3" />
                    <h3>Fort George Citadel, Canada</h3>
                    <p>Price: $800/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror8} alt="Item 3" />
                    <h3>Banff Springs Hotel, Canada</h3>
                    <p>Price: $1,200/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror9} alt="Item 3" />
                    <h3>Château de Brissac, France</h3>
                    <p>Price: $4,000/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror10} alt="Item 3" />
                    <h3>Borgvattnet Prästgård, Sweeden</h3>
                    <p>Price: $1,300/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror11} alt="Item 3" />
                    <h3>Babenhausen Barracks, Germany</h3>
                    <p>Price: $900/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror12} alt="Item 3" />
                    <h3>awang Sewu, Indonesia</h3>
                    <p>Price: $700/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror13} alt="Item 3" />
                    <h3>Poveglia Island, Italy</h3>
                    <p>Price: $800/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror14} alt="Item 3" />
                    <h3>Island of the Dolls, Mexico</h3>
                    <p>Price: $1,000/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror15} alt="Item 3" />
                    <h3>St Augustine Lighthouse, USA</h3>
                    <p>Price: $650/day</p>
                </div>
                <div className="grid-item">
                    <img src={horror16} alt="Item 3" />
                    <h3>Alcatraz Island, USA</h3>
                    <p>Price: $2,500/day</p>
                </div>
                {/* Continue creating grid items as needed */}
            </div>
        </div>
    );
};

export default Horror;
