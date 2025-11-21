import React from 'react'
import Master from './Layout/Master'

const CartList = () => {
  return (
    <Master>
     <div className="container">
     <div className='card card-body'>
     <h4>Cart List</h4>
     <table className='table table-striped'>
     <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Remove</th>
        </tr>
     </thead>
     <tbody>
        <tr>
            <td>Product name</td>
            <td>1000mmk</td>
            <td>
                <button className='btn btn-dark btn-sm'>-</button>
                <input type='text' className='btn btn-sm btn-secondary disabled' value={3}/>
                <button className='btn btn-dark btn-sm'>+</button>
            </td>
            <td><button className='btn btn-sm btn-danger'>*</button></td>
        </tr>
     </tbody>

     </table>

     </div>

     </div>
    </Master>
  )
}

export default CartList
