import React,{useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import '../assets/navigation.css';
import ImgDashboard from '../assets/Home.png';
import ImgUser from '../assets/user.svg';
import ImgNews from '../assets/news.svg';
import ImgProdukHukum from '../assets/produkHukum.svg';
import ImgSignOut from '../assets/signOut.svg';
import '../assets/dashboardStyles.css';
import { AuthContext } from "../context/AuthContext";

const styles={
    boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.5)',
    borderRight: '2px solid #F4F4F4',
    height: '100%',
    width: '20%',
};

const Navigation = ({active}) => {
  const history = useNavigate();
  const {user} = useContext(AuthContext)

    return(

            <nav className="navbar navbar-expand-lg" style={styles}>
                <div className="dashboardNav">
                    <div>
                        <Link className={`nav-link itemDashboard ${user.name==="webOperator" ? "show" : ""}`} aria-current="page" to="/"><img src={ImgDashboard} alt="Dashboard" /> Dashboard</Link>
                        <Link className={`nav-link itemDashboard ${user.name==="webOperator" ? "show" : ""}`} to="/userClient"> <img src={ImgUser} alt="User" /> User</Link>
                        <Link className={`nav-link itemDashboard ${user.name==="admin" ? "show" : ""}`} to="/news"><img src={ImgNews} alt="News" /> News</Link>
                        <Link className={`nav-link itemDashboard ${user.name==="admin" ? "show" : ""}`} to="/produkHukum"><img src={ImgProdukHukum} alt="Produk Hukum" /> Produk Hukum</Link>
                        <Link className="nav-link itemDashboard" to="/signIn" onClick={()=>{
                            window.localStorage.removeItem("user")
                            history.push("/")
                          }}><img src={ImgSignOut} alt="Keluar" /> Keluar</Link>
                    </div>
                </div>
            </nav>

    );
}

export default Navigation;
