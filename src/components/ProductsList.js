import React, { useEffect, useState } from 'react';
import { ProductCard } from "./ProductCard"


export const ProductsList = () => {

    const PRODUCTS_URL= 'https://falconx-development.coffee4tech.net/products/public?country=GB'
    const [products, setProducts] = useState([]);

   useEffect( () => {
    fetch(PRODUCTS_URL)
    .then(response =>response.json())
    .then(json => setProducts(json.docs));
}
   ,[])

return <section className = "game-list">
   {products.map(product => <ProductCard key={product.id} 
   {...product}
   />)}
</section>

}