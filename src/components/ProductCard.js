import React from 'react';
import { Link } from 'react-router-dom'

export const ProductCard = ({name,description,price,h2,id}) => {
 return (
 <Link to={`/products/${id}`}>
      <section className ="product-card">
     <div className="product-wrapper">
     <h1 className = "product-title">{name}</h1>
     <p  className = "product-description">  
     {h2}       
     </p>
     <div className = "flex-wrap-buy">
     <p className = "product-price">{price}</p>
     <button className = "buy-button">Add to card</button>
     </div>
     </div>
 </section> 
 </Link>
 )
}  