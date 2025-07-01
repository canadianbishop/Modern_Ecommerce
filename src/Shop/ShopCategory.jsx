import React from "react";

import Data from '../products.json'

const ShopCategory = ({
  filterItem,
  setItem,
  menuItem,
  selectedCategory,
  setProducts,
}) => {
  return (
    <>
      <div className="widget-header"> 
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button onClick={()=> setProducts(Data)}  className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>All</button>
        {menuItem.map((val, id) => (
          <button
            key={id}
            onClick={()=> filterItem(val)}
            className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
          >
            {val}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
