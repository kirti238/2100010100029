import React,{ useEffect,useState,usecase} from 'react';
import{useParams}from'react-router-dom';
import { fetchProductById } from '../services/productService';
 
const Productdetails=()=>{
    const{id}=useParams();
    const[product,setProduct]=useState(null);
    useEffect(()=>{
        const fetchProduct=async()=>{
            const data= await fetchProductById(id);
            setProduct(data);

        };
        fetchProduct();
    },[id]);
    if(!product)return<p>Loading...</p>;
    return(
        <div className="product-details">
        
        <h1>{product.name}</h1>
        <p>{product.description}     </p>
        <p>{product.price}</p>
        </div>
    );


    

};
export default Productdetails;
