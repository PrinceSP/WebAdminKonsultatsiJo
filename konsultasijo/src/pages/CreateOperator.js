import React from "react";
import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import '../assets/button.css'

const split={
    display: 'flex',
    flexDirection: 'row',   
}

const CreateOperator = () => {
    return(
        <>        
            <div style={split}>
                <Navigation />    
                <div className="gap">
                
                    <h1>Buat Akun</h1>

                    {/* Masukan Judul */}
                    <p>Nama</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Nama"/>                
                    </div>
                    
                    {/* Masukan Judul */}
                    <p>Nama Pengguna</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Nama Pengguna"/>                
                    </div>

                    {/* Masukan Judul */}
                    <p>Kata Sandi</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Kata sandi"/>                
                    </div>

                    {/* button */}                    
                    <button className="buttonSubmit" type="submit">Posting</button>                    

                </div>                
            </div>
        </>
    );
}

export default CreateOperator;