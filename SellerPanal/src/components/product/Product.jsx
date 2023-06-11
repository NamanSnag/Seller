import React from "react";

import './style.scss'

const Product = ({ data }) => {
 
  return (
    <div className="product">
      <img src={data.images} alt="logo" className="product__img" />
      <h3>{data.productName}</h3>
      <div className="product__specs">
        <span>MRP : {data.MRP}</span>
        <span>SP : {data.SP}</span>
        <span>Quantity : {data.quantity}</span>
      </div>
    </div>
  );
};

export default Product;
