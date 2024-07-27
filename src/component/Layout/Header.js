import React from "react";
import { Link } from "react-router-dom";


const Header=()=>(
    <header>
        <h1>
            eCommerce site
        </h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/top-Products"></Link>
            
        </nav>
    </header>
);

export default Header;
