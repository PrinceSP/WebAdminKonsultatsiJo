import React from "react";
import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import '../assets/button.css'


const CreateOperator = () => {
    return(
        <>        
        <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={230}
            >
                <Navigation />    
                <div className="gap">
                
                    <h1>Buat Akun</h1>

                    {/* Masukan Judul */}
                    <p>Nama</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Judul"/>                
                    </div>
                    
                    {/* Masukan Judul */}
                    <p>Nama Pengguna</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Judul"/>                
                    </div>

                    {/* Masukan Judul */}
                    <p>Kata Sandi</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Judul"/>                
                    </div>

                    {/* button */}                    
                    <button className="buttonSubmit" type="submit">Posting</button>                    

                </div>                
            </SplitPane>
        </>
    );
}

export default CreateOperator;