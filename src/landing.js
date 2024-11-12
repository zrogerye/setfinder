import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

import product1 from './Images/product1.jpg';
import product2 from './Images/product2.jpg';
import product3 from './Images/product3.jpg';
import product4 from './Images/product4.jpg';
import product5 from './Images/product5.jpg';
import product6 from './Images/product6.jpg';
import product7 from './Images/product7.jpg';
import product8 from './Images/product8.jpg';

import item1 from './Images/item1.jpg';
import item2 from './Images/item2.jpg'; // Add imports for other item images as needed
import item3 from './Images/item3.jpg';
import item4 from './Images/item4.jpg';
import item5 from './Images/item5.jpg';
import item6 from './Images/item6.jpg';
import item7 from './Images/item7.jpg';
import item8 from './Images/item8.jpg';
import item9 from './Images/item9.jpg';
import item10 from './Images/item10.jpg';
import item11 from './Images/item11.jpg';
import item12 from './Images/item12.jpg';
import item13 from './Images/item13.jpg';
import item14 from './Images/item14.jpg';
import item15 from './Images/item15.jpg';
import item16 from './Images/item16.jpg';

// Continue importing other item images as needed up to item20.jpg

const Landing = () => {

    //go to top of the screen
    window.scrollTo(0, 0);
    
    return (
        <div className="landing-container">
            {/* Header / Navigation Bar */}
            <header className="navbar">
                <div className="logo" onClick={() => window.location.href = '/'}>
                    <span>SetFinder</span>
                </div>
                <div className="search-bar-container">
                    <input type="text" placeholder="Search" className="search-bar-input" />
                    {/* <Link to="/searchResults"> */}
                        {/* <button type="button" className="search-bar-button">&#128269;</button> */}
                    {/* </Link> */}
                    {/* <Link to="/search-results">&#128269;</Link> */}
                    {/* <button className='link-button'>
                        <Link to="/search-results">&#128269;</Link>
                    </button> */}

                        

                        <Link to="/search-results">
                            <button type="button" className="search-bar-button">&#128269;</button>
                        </Link>

                </div>

                <button type="button" className="cart-button">Cart</button>
                <button className="profile-button">Profile</button>
            </header>

            {/* Category Filter Bar */}
            <div className="category-filter-bar">
                <button className="filter-button">Cabins</button>
                <button className="filter-button">Off the Grid</button>
                <button className="filter-button">Modern</button>
                <button className="filter-button">City</button>
                <button className="filter-button">Asian</button>
                <button className="filter-button">European</button>
                <button className="filter-button">Futuristic</button>

                <Link to="/beach">
                    <button className="filter-button">Beach</button>
                </Link>

            </div>

            {/* Main Content Sections */}
            <section className="section featured-products">
                <h2>Featured Locations</h2>
                <div className="horizontal-scroll-container">
                    <div className="product-card">
                        <img src={product1} alt="Product 1" />
                        <h3>Hôtel Sidi Driss<Link to="/product-hsdt">,</Link> Tunisia</h3>
                        <p>$750/day</p>
                    </div>

                    {/* Additional product cards */}
                    <div className="product-card">
                        <img src={product2} alt="Product 2" />
                        <h3>Ta Prohm, Cambodia</h3>
                        <p>$600/day</p>
                    </div>
                    <div className="product-card">
                        <img src={product3} alt="Product 3" />
                        <h3>Ely Cathedral, England</h3>
                        <p>$1,500/day</p>
                    </div>
                    <div className="product-card">
                        <img src={product4} alt="Product 4" />
                        <h3>Villa del Balbianello, Italy</h3>
                        <p>$900/day</p>
                    </div>
                    <div className="product-card">
                        <img src={product5} alt="Product 5" />
                        <h3>Nijo Castle, Japan</h3>
                        <p>$5,000/day</p>
                    </div>
                    <div className="product-card">
                        <img src={product6} alt="Product 6" />
                        <h3>Eltham Palace, England</h3>
                        <p>$2,000/day</p>
                    </div>
                    <div className="product-card">
                        <img src={product7} alt="Product 7" />
                        <h3>The MET, USA</h3>
                        <p>$10,000/day</p>
                    </div>
                    <div className="product-card">
                        <img src={product8} alt="Product 8" />
                        <h3>Oxford University, England</h3>
                        <p>$5,000/day</p>
                    </div>
                </div>
            </section>

            <section className="section categories">
                <h2>Search by Genre</h2>
                <div className="category-grid">
                    <button className="category-item">Romance</button>

                    <Link to="/horror">
                        <button className="category-item">Horror</button>
                    </Link>

                    <button className="category-item">Action</button>
                    <button className="category-item">Western</button>
                    <button className="category-item">Adventure</button>
                    <button className="category-item">Sci-fi</button>
                </div>
            </section>

            <section className="section grid-section">
                <h2>Explore More Locations</h2>
                <div className="grid-container">
                    {/* Manually creating grid items */}
                    <div className="grid-item">
                        <img src={item1} alt="Item 1" />
                        <h3>Triangle T Ranch, USA</h3>
                        <p>Price: $1,300/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item2} alt="Item 2" />
                        <h3>Roosevelt Hotel, USA</h3>
                        <p>Price: $2,000/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item3} alt="Item 3" />
                        <h3>Taos Ski Valley, USA</h3>
                        <p>Price: $2,000/day</p>
                    </div>
                    {/* Continue creating grid items up to item 20 */}
                    {/* Example */}
                    <div className="grid-item">
                        <img src={item4} alt="Item 4" />
                        <h3>Mont Saint-Michel, France</h3>
                        <p>Price: $4,000/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item5} alt="Item 5" />
                        <h3>Palace of Versailles</h3>
                        <p>Price: $5,000/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item6} alt="Item 6" />
                        <h3>Louvre Museum</h3>
                        <p>Price: $5,500/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item7} alt="Item 7" />
                        <h3>Sydney Harbour Neighborhood, USA</h3>
                        <p>Price: $750/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item8} alt="Item 8" />
                        <h3>Flushing Main Street, USA</h3>
                        <p>Price: $2,000/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item9} alt="Item 9" />
                        <h3>Bonaventure Cemetery, USA</h3>
                        <p>Price: $1,000/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item10} alt="Item 10" />
                        <h3>Dock Street Theatre, USA</h3>
                        <p>Price: $2,500/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item11} alt="Item 11" />
                        <h3>The Driskill, USA</h3>
                        <p>Price: $3,500/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item12} alt="Item 12" />
                        <h3>Eastern State Penitentiary, USA</h3>
                        <p>Price: $2,500/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item13} alt="Item 13" />
                        <h3>1529 Mount Larson Rd, USA</h3>
                        <p>Price: $500/day</p>
                    </div>
       
                    <div className="grid-item">
                        <img src={item14} alt="Item 14" />
                        <h3>12842 Hughes Park Rd<Link to="/product-h">,</Link> USA</h3>
                        <p>Price: $700/day</p>
                    </div>


                    <div className="grid-item">
                        <img src={item15} alt="Item 15" />
                        <h3>Mozart's Coffee, USA</h3>
                        <p>Price: $1,000/day</p>
                    </div>
                    <div className="grid-item">
                        <img src={item16} alt="Item 16" />
                        <h3>200 Mercer St Unit PH4B, USA</h3>
                        <p>Price: $2,500/day</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>About Us | FAQs | Terms and Conditions | Privacy Policy</p>
            </footer>
        </div>
    );
};

export default Landing;