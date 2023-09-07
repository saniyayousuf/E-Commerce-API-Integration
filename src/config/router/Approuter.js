
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import ProductDetail from '../../Screens/ProductDetail';
import ProductList from '../../Screens/ProductList';

function Approuter() {
  return (
    <Router>
      <nav>  
      <Link to="/ProductList">ProductList</Link>


      </nav>
        <Routes>
        
          <Route  path="/ProductList"  element={<ProductList/>}/>
          <Route path="/ProductDetail/:id"  element={<ProductDetail/>}/>
        </Routes>
      </Router>
  );
}

export default Approuter;



