import React from "react";
import { Link } from "react-router-dom";

const header={
    fontWeight: 'bold',
}
const input={
    padding: '10px 200px 10px 10px',       
    borderRadius: '10px',
    marginTop: '0',    
}
const container={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',    
}
const label ={
    marginBottom: '1px',
    marginTop: '20px',
    fontWeight: 'normal',    
}
const button ={
    marginTop: '40px',
    backgroundColor: 'black',
    padding: '10px 175px 10px 175px',       
    borderRadius: '10px',
    color: 'white',
}

const SignIn = () => {
    return(
        <>
            <div style={container}>
                <h1 style={header}>MASUK</h1>
                                 
                <div>
                    <p style={label}>Username</p> 
                    <input style={input} type="text" placeholder="Masukan username"/>                
                </div>
                 
                <div>
                    <p style={label}>Kata Sandi</p>
                    <input style={input} type="text" placeholder="Masukan Kata Sandi"/>                
                </div>
                
                <Link style={button} className="nav-link mb-3" to="/dashboard">Masuk</Link>                       

            </div>
        </>
    );
}

export default SignIn;