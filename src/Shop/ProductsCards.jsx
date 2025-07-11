import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const ProductsCards = ({gridList, products}) => {
  return (
    <div className={`row shop-product-wrap justify-content-center ${ gridList  ? 'grid' : 'list'}`}>
      {
            products.map((product,i)=>(
                  <div key={i} className='col-lg-4 col-md-6 col-12'>
                        <div className="product-item">
                              {/* product images */}
                              <div className="product-thumb">
                                    <div className="pro-thumb">
                                          <img src={product.img} alt="" />
                                    </div>
                                    
                                    {/* product actionj link */}
                                    <div className='product-action-link'>
                                          <Link to={`/shop/${product.id}`}>
                                                <i className="icofont-eye"></i>
                                          </Link>
                                          <a href="#">
                                                <i className="icofont-heart"></i>
                                          </a>

                                          <Link to={`/cart-page`}>
                                                <i className="icofont-cart-alt"></i>
                                          </Link>
                                    </div>
                              </div>

                              {/* product content */}
                              <div className="product-content">
                                    <h5>
                                          <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                    </h5>
                                    <p className='productRating'><Rating/></p>
                                    <h6>${product.price}</h6>
                              </div>

                        </div>

                        {/* list style */}

                        <div className="product-list-item">
                              {/* product images */}
                              <div className="product-thumb">
                                    <div className="pro-thumb">
                                          <img src={product.img} alt="" />
                                    </div>
                                    
                                    {/* product actionj link */}
                                    <div className='product-action-link'>
                                          <Link to={`/shop/${product.id}`}>
                                                <i className="icofont-eye"></i>
                                          </Link>
                                          <a href="#">
                                                <i className="icofont-heart"></i>
                                          </a>

                                          <Link to={`/cart-page`}>
                                                <i className="icofont-cart-alt"></i>
                                          </Link>
                                    </div>
                              </div>

                              {/* product content */}
                              <div className="product-content">
                                    <h5>
                                          <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                    </h5>
                                    <p className='productRating'><Rating/></p>
                                    <h6>${product.price}</h6>
                              </div>

                        </div>

                  </div>
            ))
      }
    </div>
  )
}

export default ProductsCards