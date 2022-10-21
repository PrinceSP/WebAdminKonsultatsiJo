import React from "react";
import { Link,useNavigate } from "react-router-dom";
import '../assets/navigation.css';
import ImgDashboard from '../assets/Home.png';
import ImgUser from '../assets/user.svg';
import ImgNews from '../assets/news.svg';
import ImgProdukHukum from '../assets/produkHukum.svg';
import ImgSignOut from '../assets/signOut.svg';
import '../assets/dashboardStyles.css';

const styles={
    boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.5)',
    borderRight: '2px solid #F4F4F4', 
    height: '100%',
    width: '20%',
};

<<<<<<< HEAD
const Navigation = ({active}) => {
  const history = useNavigate();

    return(

            <nav className="navbar navbar-expand-lg" style={styles}>
                <div className="dashboardNav">
                    <div>
                        <Link className="nav-link itemDashboard" aria-current="page" to="/"><img src={ImgDashboard} alt="Dashboard" /> Dashboard</Link>
                        <Link className="nav-link itemDashboard" to="/userClient"> <img src={ImgUser} alt="User" /> User</Link>
                        <Link className="nav-link itemDashboard" to="/news"><img src={ImgNews} alt="News" /> News</Link>
                        <Link className="nav-link itemDashboard" to="/produkHukum"><img src={ImgProdukHukum} alt="Produk Hukum" /> Produk Hukum</Link>
                        <Link className="nav-link itemDashboard" onClick={()=>{
                            window.localStorage.removeItem("user")
                            history.push("/login")
                          }}><img src={ImgSignOut} alt="Keluar" /> Keluar</Link>
=======
const Navigation = () => {
    return(       
        
            <nav className="navbar navbar-expand-lg" style={styles}>                
                <div className="dashboardNav">                           
                    <div>                        
                        <Link className="nav-link itemDashboard topDashboard" aria-current="page" to="/Dashboard"><img src={ImgDashboard} alt="Dashboard" /> Dashboard</Link>
                        <Link className="nav-link itemDashboard" to="/userClient"> <img src={ImgUser} alt="User" /> User</Link>                       
                        <Link className="nav-link itemDashboard" to="/news"><img src={ImgNews} alt="News" /> News</Link>       
                        <Link className="nav-link itemDashboard" to="/produkHukum"><img src={ImgProdukHukum} alt="Produk Hukum" /> Produk Hukum</Link>                    
                        <Link className="nav-link itemDashboard" to="/"><img src={ImgSignOut} alt="Keluar" /> Keluar</Link>                                            
>>>>>>> 37300a41154a72000e789d7361dcfdb8ed55ecc5
                    </div>
                </div>
            </nav>

    );
}

export default Navigation;
