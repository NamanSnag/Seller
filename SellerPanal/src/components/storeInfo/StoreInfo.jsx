import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { useSelector } from 'react-redux';

const StoreInfo = () => {
  const [data, setData] = useState({
    address: "",
    gst: "",
    image: "",
    storeTimings: "",
  });

  const token = useSelector(state => state.token)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `/api/seller/storeInfo`;
      await axios.patch(url, {...data, token:token});
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
    <div className="store-info">
      <h2>Store Information</h2>
      <div>
        <div className="form-group">
          <label htmlFor="address">Address : </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gst">GST :</label>
          <input
            type="text"
            id="gst"
            name="gst"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL : </label>
          <input type="url" id="image" name="image" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="storeTimings">Store Timings : </label>
          <input
            type="text"
            id="storeTimings"
            name="storeTimings"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default StoreInfo;
