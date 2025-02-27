import React from "react";
import styled from "styled-components";

const CardProduct = ({ product }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image_container">
          <img src={product.imageURL} alt={product.name} className="image" />
        </div>
        <div className="title">
          <span>{product.name}</span>
        </div>
        <div className="description">
          <span>{product.description}</span>
        </div>
        <div className="action">
          <div className="price">
            <span>₹{product.price}</span>
          </div>
          <button className="cart-button">
            <svg
              className="cart-icon"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span>Buy</span>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --bg-card: #e6f2ff; /* Lighter blue shade */
    --primary: #0b3d91; 
    --primary-light: #063073; 
    --light: #d9d9d9;
    --dark: #343a40; 
    
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    width: 100%;
    height: 400px; 
    background-color: var(--bg-card); 
    border-radius: 1rem;
    transition: transform 0.2s;
  }

  .image_container {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 300px;
    background-color: white;
    border-radius: 0.5rem;
  }

  .image_container .image {
    width: 100%;
    height: 300px;
    object-fit: scale-down;
    object-position: center;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark);
    text-transform: capitalize;
  }

  .description {
    font-size: 0.875rem;
    color: var(--dark); 
  }

  .action {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark); 
  }

  .cart-button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background-color: var(--primary); 
    font-size: 0.75rem;
    font-weight: 500;
    color: white; 
    border-radius: 0.5rem;
    box-shadow: inset 0 0 0.25rem 1px var(--light); 
  }

  .cart-button .cart-icon {
    width: 1rem; 
  }

  @media (max-width: 768px) {
    .card {
      height: auto;
      padding: 0.75rem;
    }
  }

  @media (max-width: 576px) {
    .card {
      height: auto;
      padding: 0.5rem;
    }
  }
`;

export default CardProduct;
