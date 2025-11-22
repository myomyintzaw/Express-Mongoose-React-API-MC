import {useContext, useEffect, useState } from 'react'
import Master from './Layout/Master';
import axios from 'axios';
import Loader from './Components/Loader';
import CartContext from '../Context/CartContext';


const ProductPage = () => {
  const [loader, setLoader] =useState(true);
  const [products, setProducts] = useState(true);

  //context
  const {cart,setCart}=useContext(CartContext);
  console.log(cart);


  useEffect(() => {axios.get("http://localhost:3000/api/product").then((d)=>{
    setProducts(d.data);
    setLoader(false);
  });}, []);

  const AddToCart=(p)=>{
    const product={...p,qty:1};
    setCart([...cart,product]);

  }

  return (
    <Master>
    {loader && <Loader/>}
    {!loader && (
 <div className='container mt-3'>
 <div className='row'>
 {
  products.map((p)=>(
 <div key={p._id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
    <div className='card'>
      <img src={p.image}  className="card-image" />
      {/* <img src="https://s.alicdn.com/@sc04/kf/UTB8.NhesiDEXKJk43Oqq6Az3XXa0.jpg_250x250xz.jpg"  className="card-image" /> */}
      <div className="card-body">
       <span>{p.name}</span> 
       <div className="d-flex justify-content-between">
        <span className="text-warning">{p.price} mmk</span>
        <button onClick={()=>AddToCart(p)} className="btn btn-sm btn-dark">Cart</button>
       </div>
      </div>
    </div>
  </div>
  ))

  
 }
 
 </div>

 </div>


    )}

    </Master>
  )
}

export default ProductPage
