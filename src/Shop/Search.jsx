import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search product"
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="iconfont-search-2"></i>
        </button>
      </form>

      {/* showing search result */}
      <div>
            {
                  searchTerm && filteredProducts.map((product)=>(
                        <Link key={product.id} to={`/shop/${product.id}`}>
                              <div className="d-flex gap-3  p-2">
                                    <div>
                                          <div className="pro-thumb h-25">
                                                <img src={product.img} width={70}  className ='flex{grow|shrink}-0'alt="" />
                                          </div>
                                    </div>
                                    <div className="product-content">
                                          <p>
                                                <Link to={`/shop/${product.id}`} > {product.name}</Link>
                                          </p>
                                          <h6>${product.price}</h6>
                                    </div>
                              </div>
                        </Link>
                  ))
            }
      </div>
    </div>
  );
};

export default Search;
