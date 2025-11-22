import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart,setCart] = useState([]);
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    );
};
export default CartContext;