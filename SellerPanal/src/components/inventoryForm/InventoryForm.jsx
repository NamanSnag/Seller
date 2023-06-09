import React, { useState } from 'react'

import './style.scss'
import { useSelector } from 'react-redux';
import axios from 'axios';

const InventoryForm = () => {

    const [data, setData] = useState({
        category: "",
        subCategory: "",
        productName: "",
        MRP: "",
        SP: "",
        quantity: "",
        images: "",
      });

      const token = useSelector(state => state.token)

      const handleSubmit = async (e) => {
        try {
          const url = `/api/seller/addProduct`;
          await axios.post(url, {...data, token:token});
          alert("store information updated")
        } catch (error) {
          
        }
      };

    const handleChange = (e) => {
        // Update the form field value in the state
        e.preventDefault();
        setData((prevValues) => ({
          ...prevValues,
          [e.target.name]: e.target.value,
        }));
      };

  return (
    <div className="inventory">
      <h2>Add Product</h2>
      <div className='form_container'>
        <div className="form-group">
          <label htmlFor="category">category : </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gst">SubCategory :</label>
          <input
            type="text"
            id="subCategory"
            name="subCategory"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gst">ProductName :</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gst">MRP :</label>
          <input
            type="number"
            id="MRP"
            name="MRP"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gst">SP :</label>
          <input
            type="number"
            id="SP"
            name="SP"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">quantity : </label>
          <input type="number" id="quantity" name="quantity" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="images">Image URL : </label>
          <input
            type="url"
            id="images"
            name="images"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </div>
  )
}

export default InventoryForm