import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './productHSDT.css'; // Adjust the path to your CSS file if necessary
import product1 from './Images/product1.jpg'; // Example import - replace or add as needed
import hsd2 from './Images/hsd2.jpg';
import hsd3 from './Images/hsd3.jpg';


const ProductHSDT = () => {
  const [selectedImage, setSelectedImage] = useState(product1); // Replace with your default image path

  return (
    <div className="product-hsdt-page">
      {/* Header */}
      <header className="navbar">
        <div className="logo" onClick={() => window.location.href = '/'}>
          <span>SetFinder</span>
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Search" className="search-bar-input" />
          <Link to="/search-results">
            <button type="button" className="search-bar-button">&#128269;</button>
          </Link>
        </div>
        <button type="button" className="cart-button">Cart</button>
        <button className="profile-button">Profile</button>
      </header>

      {/* Product Page Content */}
      <div className="product-content">
        <div className="image-section">
          <img src={selectedImage} alt="Product" className="main-product-image" />
          <div className="thumbnail-container">
            <img
              src={product1}
              alt="Thumbnail 1"
              className="thumbnail"
              onClick={() => setSelectedImage(product1)}
            />
            <img
              src={hsd2}
              alt="Thumbnail 2"
              className="thumbnail"
              onClick={() => setSelectedImage(hsd2)}
            />
            <img
              src={hsd3}
              alt="Thumbnail 3"
              className="thumbnail"
              onClick={() => setSelectedImage(hsd3)}
            />
          </div>
        </div>
        <div className="details-section">
          <h1 className="product-title">Hôtel Sidi Driss, Tunisia</h1>
          <p className="product-price">$1,200/day</p>
          <p className="product-description">
          Hôtel Sidi Driss is a unique and historically significant site located in Matmata, Tunisia. Known for its distinct subterranean architecture, the hotel is built into the ground with rooms arranged around several open-air courtyards. This traditional Berber troglodyte dwelling gained international fame for its role as Luke Skywalker's childhood home on the desert planet of Tatooine in the original 1977 "Star Wars" film and later appeared in "Star Wars: Attack of the Clones." Visitors can explore the film sets, including recognizable props and decor, and immerse themselves in the otherworldly charm that blends Tunisia’s rich cultural heritage with a touch of cinematic history. Despite its fame, Hôtel Sidi Driss remains a functioning hotel, offering guests a rare chance to sleep in one of the original filming locations and experience the rustic yet captivating beauty of Matmata's desert landscape.
          </p>

          <label htmlFor="booking">Booking Date:</label>
<input type="date" id="booking" name="booking" style={{ marginBottom: '20px' }} />



          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductHSDT;
