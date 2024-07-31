import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState({});
    const url = "https://food-backend-rtmk.onrender.com";
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([]);

    const addToCart = async (itemId) =>{
        //if there no cart item is added this below function will be executed
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+'/api/cart/add',{itemId},{headers:{token}});
        } 
    }

    // remove item count 
    const removeFromCart = async (itemId) =>{
        if(token){
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
            await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}});
        } 
    } 

    const getTotalCartAmount = () =>{
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = food_list.find((product)=>product._id === item);
                totalAmount += iteminfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () =>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCartData =  async (token) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        async function loadData () {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[]);
    
    const contextValue = { 
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;