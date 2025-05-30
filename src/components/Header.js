import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{
    const [loginbtn, setloginbtn] = useState("login")
    return(
        <div className="header-container">
           <div className="logo-container">
            <img
            className="logo"
            src="https://img.freepik.com/premium-vector/minimalist-food-delivery-logo-design-modern-simple-branding-delivery-services_838011-283.jpg"
            />
            </div>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Profile</li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li>Cart</li>
                    <button 
                    onClick={()=>{
                        loginbtn === 'login' ?
                        setloginbtn('logout') :
                        setloginbtn('login');
                    }}
                    >
                        {loginbtn}
                    </button>

                </ul>

            
            </div>   
        </div>
    )
}
export default Header;