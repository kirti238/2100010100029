import React from "react";
import {Link}from 'react-router-dom';

const Productcard=({product})=>(
    <div>className="product-card"
    <img src={download.jpeg}alt={product.name}/>
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <Link to={`/prodects /${product.id}`}>View details </Link>

    
    
    </div>

);
export default Productcard;