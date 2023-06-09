import React from "react";
import { InventoryForm, StoreInfo, InventoryList } from "../../components";

import "./style.scss";

const Dashboard = () => {
 
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

        <div id="allInventory">
          <InventoryList />
        </div>
      </div> 
    </div>
    </>
  );
};

export default Dashboard;
