import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Home from "./Home/Home.jsx";
import Blogs from "./Blogs/Blogs.jsx";
import Shop from "./Shop/Shop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blogs/>}/>
      </Route>
    </Routes>  
    </BrowserRouter>
  </StrictMode>
);
