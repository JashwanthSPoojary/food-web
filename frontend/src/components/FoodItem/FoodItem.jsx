import  { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { FaCircleMinus } from "react-icons/fa6";
import { FcPlus } from "react-icons/fc";

const FoodItem = ({id,name,description,price,image}) => {
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img src={url+'/images/'+image} alt="" className="food-item-image" />
            {/* logic for the add button in the cart */}
            {
              !cartItems[id]
              ?<div className="add"><FcPlus size={30} onClick={()=>addToCart(id)} /></div>
              :<div className='food-item-counter'>
                {/* <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" /> */}
                <FaCircleMinus size={25} color='red' onClick={()=>removeFromCart(id)}/>
                <p>{cartItems[id]}</p>
                <FcPlus size={25} onClick={()=>addToCart(id)}/>
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <p className="food-item-price">${price}</p>
            </div>
            <p className="food-item-desc">{description}</p>
        </div>
    </div>
)
}

export default FoodItem