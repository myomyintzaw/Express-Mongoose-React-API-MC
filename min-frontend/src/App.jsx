import React from 'react'
import ProductPage from './Pages/ProductPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartList from './Pages/CartList';
import NoFountPage from './Pages/NoFountPage';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartList/>}/>
      <Route path="*" element={<NoFountPage/>}/>
    </Routes>
    </BrowserRouter>

    </>

  );
};

export default App
