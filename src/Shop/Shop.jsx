import React from 'react'
import PageHeader from '../components/PageHeader'
import { useState } from 'react';
import Data from '../products.json'
import ProductsCards from './ProductsCards';
import Pagination from './Pagination.jsx';
import Search from './Search';
import ShopCategory from './ShopCategory';

const showResults = 'Showing 01 - 12 of 139 Results';

const Shop = () => {
      const [gridList,setGridList] = useState(true)
      const [products, setProducts] =useState(Data)

      // pagination
      const[currentPage,setCurrentPage]= useState(1);
      const producePerPage = 12;
      const indexOfLastProduct = currentPage * producePerPage ;
      const indexOfFirstProduct = indexOfLastProduct - producePerPage;
      const currentProduct = products.slice(indexOfFirstProduct,indexOfLastProduct);
      
      // function to change current page
      const paginate = (pageNumber)=> {
            setCurrentPage(pageNumber)
      }

      // filter products based on category

      const [selectedCategory, setSelectedCategory] = useState('All');
      const menuItem = [...new Set(Data.map((val)=> val.category))];

      const filterItem = (curcat)=>{
            const newItem = Data.filter((newval)=> (
                  newval.category === curcat
            ))

            setSelectedCategory(curcat);
            setProducts(newItem)
      }


  return (
    <div>
      <PageHeader curPage= 'Shop' title= 'Our Shop Page'/>

      {/* main content */}

      <div className="shop-page padding-tb">
            <div className="container">
                  <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                              <article>
                                    {/* layout and title icon here */}
                                    <div className="d-flex shop-title flex-wrap justify-content-between">
                                          <p>{showResults}</p>
                                          <div className={`product-view-mode ${gridList ? 'gridActive': 'listActive' }`}>
                                                <a className='grid' onClick={()=> setGridList(!gridList)}>
                                                      <i className="icofont-ghost"></i>
                                                </a>
                                                <a className='list' onClick={()=> setGridList(!gridList)}>
                                                      <i className="icofont-listine-dots"></i>
                                                </a>
                                          </div>
                                    </div>

                                    {/* product cards */}
                                    <div>
                                          <ProductsCards gridList ={gridList} products={currentProduct }/>
                                    </div>
                                    {/* pagination */}

                                    <Pagination 
                                    producePerPage ={producePerPage} 
                                    totalProduct ={products.length}
                                    paginate ={paginate}
                                    activePage ={currentPage}/>
                                    
                              </article>
                        </div>
                              {/* left side */}

                        <div className="col-lg-4 col-12">
                              <aside>
                                    <Search products={products} gridList={gridList}/>
                                    <ShopCategory filterItem={filterItem}
                                     setItem={setProducts}
                                     menuItem={menuItem}
                                     setProducts={setProducts}
                                     selectedCategory={selectedCategory}/>
                              </aside>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Shop