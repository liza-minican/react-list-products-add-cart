import React from 'react';
import { Link } from 'react-router-dom'
//import { addItem } from "../reducers/cart";
import { useDispatch } from "react-redux";
import { cart } from "../reducers/cart";

export const ProductCard = ({name,description,price,h2,id}) => {

    const dispatch = useDispatch();
    // const handleAddItem = (id) => {
    //     dispatch(addItem(id));
    //   };

//     const handleAddItem = () => {
// dispatch(cart.actions.setCartItems())
//     }
const handleAddItem = () => {
    console.log('add function')
}

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
     <button className = "buy-button" onClick = {handleAddItem}>Add to card</button>
     </div>
     </div>
 </section> 
 </Link>
 )
}  