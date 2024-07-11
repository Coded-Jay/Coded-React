import React from "react";
import ProductImage from './Images/PRODUCT.jpg';
import './imago.css'

function MyComponent(){
    return(
        <div className="imago">
            <img src={ProductImage} alt="Our Big Product Sales"/>
            <p className="BPS">Big Product Sales in 2024</p>
        </div>
    );
}
export default MyComponent;