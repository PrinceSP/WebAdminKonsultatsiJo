import React from "react";
import { Link } from "react-router-dom";
import '../assets/navigation.css';
import ImgDashboard from '../assets/Home.png';
import ImgUser from '../assets/user.svg';
import ImgNews from '../assets/news.svg';
import ImgProdukHukum from '../assets/produkHukum.svg';
import ImgSignOut from '../assets/signOut.svg';


const Navigation = () => {
    return(       
        
            <nav className="navbar navbar-expand-lg bg-danger">                
                <div>       
                    <h2 id="label">KonsultasiJo</h2>                         
                    <div>                        
                        <Link className="nav-link text-white mt-4 mt-4 mb-3" aria-current="page" to="/"><img src={ImgDashboard} alt="Dashboard" /> Dashboard</Link>
                        <Link className="nav-link text-white mb-3" to="/userClient"> <img src={ImgUser} alt="User" /> User</Link>                       
                        <Link className="nav-link text-white mb-3" to="/news"><img src={ImgNews} alt="News" /> News</Link>       
                        <Link className="nav-link text-white mb-3" to="/produkHukum"><img src={ImgProdukHukum} alt="Produk Hukum" /> Produk Hukum</Link>                    
                        <p><img className="keluar" src={ImgSignOut} alt="SignOut" /> Keluar</p>
                    </div>
                </div>                
            </nav>        
        
    );
}

export default Navigation;