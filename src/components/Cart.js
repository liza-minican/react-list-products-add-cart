import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom'

export const Cart = () => {
  const { cart } = useParams();
    const { cartItems } = useSelector((state) => state.cartItems);


    return (
     <>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <h2>Your card is empty</h2>
      ) : (
        <section>
          {cartItems.map((item) => (
            <>
             <p>{item.name}</p>
             <p>{item.price}</p>
            </>
           )
          )}
        </section>
    )}
      </>
    )
    }
