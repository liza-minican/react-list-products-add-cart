
import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from "react-redux";

//import { BackArrow } from 'icons/BackArrow'

export const ProductDetails = () => {
    const { id } = useParams();
    const products = useSelector((store) => store.productList.products);
    //console.log(products);
    //const [product, setProduct] = useState();
    const [loading, setLoading] = useState();
  const product = products.find(product => product.id === id)
  //console.log(product);

    // useEffect(() => {
    //     setLoading(true)
    //     fetch(
    //       //`https://api.themoviedb.org/3/movie/${id}?api_key=0a7bdc5f7b44e6a5230c95a3dbb9bbbc&language=en-US&page=1`
    //       `https://falconx-development.coffee4tech.net/products/public?country=GB`
    //     )
    //       .then((res) => res.json())
    //       .then((json) => {
    //         setProduct(json.docs)
    //         setLoading(false)
    //       })
    //   }, []) // We need to pass id as a dependecy here so everytime the id changes, we do a new fetch.
    
      //console.log(product)
  if (loading) {
    return <h1>LOADING</h1>
  }

return (
    <div>
    <Link to="/" className="backLink">
      {/* <BackArrow /> */}
      Back
    </Link>
    <h1>hello</h1>
    <p>{id}</p> 
    {/* <p>{product.name}</p> */}
  </div>
)
}