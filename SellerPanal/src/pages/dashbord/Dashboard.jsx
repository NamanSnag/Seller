import React from "react";
import { InventoryForm, StoreInfo } from "../../components";

import "./style.scss";

const Dashboard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };
  return (
    <>
      <div className="marginTop"></div>
      <div className="dashboard__container">
      <div className="dashboard__content">
        <div id="storeInfo">
            <StoreInfo/>
        </div>

        <div id="inventory">
          <InventoryForm/>
        </div>

        <div id="allInventory"></div>
      </div> 
    </div>
    </>
  );
};

export default Dashboard;
