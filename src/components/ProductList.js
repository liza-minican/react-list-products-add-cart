import React, { useEffect, useState } from 'react';
import { ProductCard } from "./ProductCard"

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { productList } from "../reducers/productList";
import { getProducts } from "../reducers/productList";


export const ProductList = () => {

//     const PRODUCTS_URL= 'https://falconx-development.coffee4tech.net/products/public?country=GB'
//     const [products, setProducts] = useState([]);

//    useEffect( () => {
//     fetch(PRODUCTS_URL)
//     .then(response =>response.json())
//     .then(json => setProducts(json.docs));
// }
//    ,[])

const dispatch = useDispatch();
const products = useSelector((store) => store.productList.products);
//console.log(products);

useEffect(() => {
  dispatch(getProducts());
}, [dispatch]);

return <section className = "product-list">
   {products.map(product => <ProductCard key={product.id} 
   {...product}
   />)}
</section>

}