import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png'

const Navbar = () => {
      const [menuToggle, setMenuToggle] = useState(false);
      const [socialToglle, setSocialToggle] = useState(false)
      const [headerFixed, setHeaderFixed] = useState(false)

    //  header fixed 

    window.addEventListener('scroll', ()=> {
      if(window.scrollY > 200){
            setHeaderFixed(true)
      }else{
            setHeaderFixed(false)
      }
    })


  return (
    <header className={`header-section style-4 ${headerFixed ? 'headerFixed fadeInUp': ''}`}>
      {/* header top start */}
      <div className={`header-top  ${socialToglle ? 'open' : ''}`}>
            <div className='container'>
                  <div className='header-top-area'>
                        <Link to= '/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                        <Link to= '/login'>Log In</Link>
                  </div>
            </div>
      </div>

      {/* header bottom */}

      <div className='header bottom'>
            <div className="container">
                  <div className='header-wrapper'>
                        {/* logo */}
                        <div className='logo-search-acte'>
                              <div className='logo'>
                                    <Link to={'/'}>
                                          <img src={logo} alt="" />
                                    </Link>
                              </div>
                        </div>

                        {/* menu area */}

                        <div className='menu-area'>
                              <div className="menu">
                                    <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                                          <li><Link to='/'>Home</Link></li>
                                          <li><Link to='/shop'>Shop</Link></li>
                                          <li><Link to='/blog'>Blog</Link></li>
                                          <li><Link to='/about'>About</Link></li>
                                          <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                              </div>

                              {/* sign up and login */}

                              <Link to='sign-up ' className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                              <Link to= '/login' className='d-none d-md-block'> Log In</Link>

                              {/* menu toggler */}

                              <div onClick={() => setMenuToggle(prev => !prev)} className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                              </div>

                              {/* social toggle */}
                              <div onClick={()=> setSocialToggle(prev => !prev)} className='ellepsis-bar d-md-none'>
                                    <i className="icofont-info-square"></i>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
    </header>
  )
}

export default Navbar