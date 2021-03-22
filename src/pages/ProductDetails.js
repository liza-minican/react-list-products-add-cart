import React from 'react';
import {useParams} from 'react-router-dom';

export const ProductDetails = () => {
    const { id } = useParams();
return (
    <p>{id}</p>
)
}