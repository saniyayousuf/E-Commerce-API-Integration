// import React from "react"
// import { BrowserRouter,Route ,Routes} from "react-router-dom";
// import ProductDetail from "../../Screens/ProductDetail";
// import ProductList from "../../Screens/ProductList";


// function Approuter() {
//     return (
//       <>
//       <BrowserRouter>
//     <Routes>
//         <Route exact path="/ProductList"  element={<ProductList/>}/>
//         <Route path="/ProductDetail/:id"  element={<ProductDetail/>}/>
//     </Routes>

 
      
//       </BrowserRouter>
//       </>
//     );
//   }
  
//   export default Approuter;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from '../../Screens/ProductDetail';
import ProductList from '../../Screens/ProductList';

function Approuter() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} /> */}
          <Route  path="/ProductList"  element={<ProductList/>}/>
          <Route path="/ProductDetail/:id"  element={<ProductDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Approuter;



