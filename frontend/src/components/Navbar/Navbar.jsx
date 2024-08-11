import  { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = ({setShowLogin}) => {
  const [btn,setbtn] = useState("home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <Link  to='/' onClick={()=>setbtn("home")}  className={btn==="home"?"active":""}>home</Link>
        <a href='#footer' onClick={()=>setbtn("contact-us")} className={btn==="contact-us"?"active":""}>contact-us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><RiShoppingBag2Fill size={30}/></Link>
          <div className={getTotalCartAmount()==0?"":"dot"}></div>
        </div>
        {
        !token?<button onClick={()=>setShowLogin(()=>true)}>sign in</button>:
        <div className="navbar-profile">
          <FaCircleUser size={30}/>
          <ul className="navbar-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li> <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>
        }
      </div>
    </div>

  )
}

export default Navbar