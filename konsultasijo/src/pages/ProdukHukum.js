import React from "react";
import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";

const ProdukHukum = () => {
    return(
        <>
        <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={230}
            >
                <Navigation />    
                <div>
                    <h1>JDIH</h1>
                    <h1>News</h1>
                    <h1>News</h1>
                    <h1>News</h1>
                    
                </div>                
            </SplitPane>            
        </>
    );
}

export default ProdukHukum;