import React from "react";
import Navigation from "../components/Navigation";
import SplitPane from "react-split-pane";
import '../assets/gap.css';
import '../assets/styles.css';

const split={
    display: 'flex',
    flexDirection: 'row',   
}

const Dashboard = () => {
    return(        
            <>
            <div style={split}>
                <Navigation />                    
                <div className="gap">                                                     
                    <h5>Selamat Datang, Admin</h5>
                    <p>statistik</p>                    
                </div>                                
            </div>
            </>
    );
}

export default Dashboard;
