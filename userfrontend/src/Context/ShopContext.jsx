import { createContext , useState, useEffect } from "react";
import all_products from "../assets/all_products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index =0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider =(props) => {
    const [cartItems, setcartItems] = useState(getDefaultCart())
    const [all_products, setall_products] = useState([]);
    const [recent_product, setrecent_product] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/allproducts").then((response)=> response.json()).then((data)=> setall_products(data));
        fetch("http://localhost:4000/recentproduct").then((response)=> response.json()).then((data)=> setrecent_product(data));
       },[])

     



   const addToCart = (itemId) => {
    setcartItems((prev) => ({...prev ,[itemId]:prev[itemId]+1}))
    console.log(cartItems)
   }
   const removeFromCart = (itemId) => {
    setcartItems((prev) => ({...prev ,[itemId]:prev[itemId]-1}))
   }

   const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = all_products.find((product)=> product.productid == Number(item));
            totalAmount += itemInfo.price * cartItems[item];

        }
       
    }
    return totalAmount;
   }
   const getTotalCartItems = () => {
    let totalItems =0;
    for (const item in cartItems){
        if (cartItems[item] > 0) {
            totalItems += cartItems[item];
        }
    }
    return totalItems
   }
   
   const contextValue ={recent_product,all_products,cartItems , addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;