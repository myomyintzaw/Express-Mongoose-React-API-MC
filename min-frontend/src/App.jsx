import React from 'react'
import ProductPage from './Pages/ProductPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartList from './Pages/CartList';
import NoFountPage from './Pages/NoFountPage';
import { CartContextProvider } from './Context/CartContext';

const App = () => {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartList/>}/>
      <Route path="*" element={<NoFountPage/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>

    </>

  );
};

export default App;
