import React,{useContext} from "react";
import Navigation from "../components/Navigation";
import SplitPane from "react-split-pane";
import '../assets/gap.css';
import '../assets/styles.css';
import { AuthContext } from "../context/AuthContext";

const split={
    display: 'flex',
    flexDirection: 'row',
}

const Dashboard = () => {
  const {user} = useContext(AuthContext)
    // console.log(user);
    return(
      <div style={split}>
        <Navigation />
        <div className="gap">
          <h5>Selamat Datang, Admin {user.name}</h5>
          <p>statistik</p>
        </div>
      </div>
    );
}

export default Dashboard;
