import React from "react";
import { Link } from "react-router-dom";
import '../assets/navigation.css';
import ImgDashboard from '../assets/Home.png';
import ImgUser from '../assets/user.svg';
import ImgNews from '../assets/news.svg';
import ImgProdukHukum from '../assets/produkHukum.svg';
import ImgSignOut from '../assets/signOut.svg';
import '../assets/dashboardStyles.css';

const styles={
    boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.5)',
    borderRight: '2px solid black',
    height: '100%',
    width: '20%',
};

const Navigation = () => {
    return(       
        
            <nav className="navbar navbar-expand-lg" style={styles}>                
                <div className="dashboardNav">                           
                    <div>                        
                        <Link className="nav-link itemDashboard topDashboard" aria-current="page" to="/dashboard"><img src={ImgDashboard} alt="Dashboard" /> Dashboard</Link>
                        <Link className="nav-link itemDashboard" to="/userClient"> <img src={ImgUser} alt="User" /> User</Link>                       
                        <Link className="nav-link itemDashboard" to="/news"><img src={ImgNews} alt="News" /> News</Link>       
                        <Link className="nav-link itemDashboard" to="/produkHukum"><img src={ImgProdukHukum} alt="Produk Hukum" /> Produk Hukum</Link>                    
                        <Link className="nav-link itemDashboard" to="/"><img src={ImgSignOut} alt="Keluar" /> Keluar</Link>                                            
                    </div>
                </div>                
            </nav>        
        
    );
}

export default Navigation;