import React from "react";
import Navigation from "../components/Navigation";
import SplitPane from "react-split-pane";
import '../assets/gap.css';
import '../assets/styles.css';

const Dashboard = () => {
    return(
            <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={230}
            >
                <Navigation />                    
                <div className="gap">                                                     
                    <h5>Selamat Datang, Admin</h5>
                    <p>statistik</p>
                </div>                    
            </SplitPane>        
    );
}

export default Dashboard;
