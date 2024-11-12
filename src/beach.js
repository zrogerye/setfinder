/*something */

import beach1 from './Images/beach1.jpg'; // Example import - replace or add as needed
import beach2 from './Images/beach2.jpg';
import beach3 from './Images/beach3.jpg';
import beach4 from './Images/beach4.jpg';
import beach5 from './Images/beach5.jpg';
import beach6 from './Images/beach6.jpg';
import beach7 from './Images/beach7.jpg';
import beach8 from './Images/beach8.jpg';
import beach9 from './Images/beach9.jpg';
import beach10 from './Images/beach10.jpg';
import beach11 from './Images/beach11.jpg';
import beach12 from './Images/beach12.jpg';
import beach13 from './Images/beach13.jpg';
import beach14 from './Images/beach14.jpg';
import beach15 from './Images/beach15.jpg';
import beach16 from './Images/beach16.jpg';
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
                <button type="button" className="cart-button">Cart</button>
                <button className="profile-button">Profile</button>
            </header>

            <h4 className='searching-for-text'>Searching for Beach</h4>

            <div className="grid-container">
                {/* Manually creating grid items - similar to the landing page */}
                <div className="grid-item">
                    <img src={beach1} alt="Item 1" />
                    <h3>Whitehaven Beach, Australia</h3>
                    <p>Price: $600/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach2} alt="Item 2" />
                    <h3>Ipanema Beach, Brazil</h3>
                    <p>Price: $1,000/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach3} alt="Item 3" />
                    <h3>Waimea Bay Beach, USA</h3>
                    <p>Price: $450/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach4} alt="Item 3" />
                    <h3>Lister Ellenbogen Beach, Germany</h3>
                    <p>Price: $500/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach5} alt="Item 3" />
                    <h3>Matira Beach, French Polynesia</h3>
                    <p>Price: $500/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach6} alt="Item 3" />
                    <h3>Grand Anse Beach, Grenada</h3>
                    <p>Price: $450/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach7} alt="Item 3" />
                    <h3>Natadola Beach, Fiji</h3>
                    <p>Price: $800/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach8} alt="Item 3" />
                    <h3>Praia de Augas Santas, Spain</h3>
                    <p>Price: $700/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach9} alt="Item 3" />
                    <h3> Seven Mile Beach, Grand Cayman</h3>
                    <p>Price: $700/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach10} alt="Item 3" />
                    <h3> Face Rock State, USA</h3>
                    <p>Price: $650/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach11} alt="Item 3" />
                    <h3>Long Beach, Cambodia</h3>
                    <p>Price: $400/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach12} alt="Item 3" />
                    <h3>Hidden Beach, Mexico</h3>
                    <p>Price: $500/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach13} alt="Item 3" />
                    <h3>Saint-Jean, St. Bart's</h3>
                    <p>Price: $700/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach14} alt="Item 3" />
                    <h3>Machir Bay, Scotland</h3>
                    <p>Price: $450/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach15} alt="Item 3" />
                    <h3>Plaka, Greece</h3>
                    <p>Price: $800/day</p>
                </div>
                <div className="grid-item">
                    <img src={beach16} alt="Item 3" />
                    <h3>Praia da Adraga, Portugal</h3>
                    <p>Price: $550/day</p>
                </div>
                {/* Continue creating grid items as needed */}
            </div>
        </div>
    );
};

export default Beach;
