import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './prodH.css'; // Adjust the path to your CSS file if necessary
import item14 from './Images/item14.jpg'; // Example import - replace or add as needed
import ph2 from './Images/ph2.jpg';
import ph3 from './Images/ph3.jpg';


const ProductH = () => {
  const [selectedImage, setSelectedImage] = useState(item14); // Replace with your default image path

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
              src={item14}
              alt="Thumbnail 1"
              className="thumbnail"
              onClick={() => setSelectedImage(item14)}
            />
            <img
              src={ph2}
              alt="Thumbnail 2"
              className="thumbnail"
              onClick={() => setSelectedImage(ph2)}
            />
            <img
              src={ph3}
              alt="Thumbnail 3"
              className="thumbnail"
              onClick={() => setSelectedImage(ph3)}
            />
          </div>
        </div>
        <div className="details-section">
          <h1 className="product-title">12842 Hughes Park Rd, USA</h1>
          <p className="product-price">$1,000/day</p>
          <p className="product-description">
          12842 Hughes Park Rd, Austin, TX 78732
          </p>
          <p>This property is a 3-bedroom, 2-bathroom single-family home located at 123 Main Street in Austin, Texas. Built in 2005, it offers 1,800 square feet of living space on a 0.25-acre lot. The interior features an open floor plan with a spacious living room, modern kitchen equipped with stainless steel appliances, and a master suite with a walk-in closet. The exterior includes a two-car garage and a fenced backyard with a patio, ideal for outdoor activities. Situated in a family-friendly neighborhood, the home is close to local schools, parks, and shopping centers, providing both comfort and convenience.</p>

          <label htmlFor="booking">Booking Date:</label>
<input type="date" id="booking" name="booking" style={{ marginBottom: '20px' }} />



          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductH;
