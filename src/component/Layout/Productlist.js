import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Productcard from '../components//Productcard';
const Productlist=()=>{
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts=async()=>{
            const response=await axios.get('./api/products');
                setProducts(response.data);
        };
            fetchProducts();
        },[]);

        return(
            <div className="product-List">
            <ProductCard key={product.id} Product={product}/>
        
        
        </div>
    );
    };
    export default Productlist;