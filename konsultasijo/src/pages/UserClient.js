import React from "react";
import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import ImgCreateAccount from '../assets/createAccount.svg';
import ImgDeleteUser from '../assets/deleteUser.svg';
import { Link } from "react-router-dom";

const split={
    display: 'flex',
    flexDirection: 'row',   
}

const UserClient = () => {
    return(
        <>        
            <div style={split}>
                <Navigation />    

                <div className="gap">  

                <div class="dropdown">
                    <a class="btn dropdown-toggle" style={{fontWeight : "bold", fontSize : 40}} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Users
                    </a>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/UserClient">Client</a></li>
                        <li><a class="dropdown-item" href="/UserOperator">Operator</a></li>                        
                    </ul>
                </div>

                <Link className="nav-link text-white mb-3" to="/createClient"><p className="cAkun"><img src={ImgCreateAccount} alt="CreateAccount" /> Buat Akun</p></Link>
                    
                    <table class="table table-hover me-5">
                        <thead>
                            <tr>                        
                            <th scope="col">NIK</th>
                            <th scope="col">FullName</th>                        
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>                            
                        
                            <tr>                        
                            <td>123456789</td>
                            <td>Septiano Client Chandra Tumulo</td>
                            <td>sdfdfs@gmail.com</td>
                            <td type="button" onClick={()=> alert('test')}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                            <tr>                        
                            <td>123456888</td>
                            <td>Rivando morten Pondaag</td>
                            <td>asdfnl@gmail.com</td>
                            <td type="button" onClick={()=> alert('test')}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                            <tr>                        
                            <td>987654321</td>
                            <td>Nariva Charline Wagey</td>
                            <td>sakdfjdsk@gmail.com</td>                            
                            <td type="button" onClick={()=> alert('test')}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>
                            
                            <tr>                        
                            <td>987654123</td>
                            <td>Ester Gracela Sangkoy</td>
                            <td>sdsfsk@gmail.com</td>                            
                            <td type="button" onClick={()=> alert('test')}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                        </tbody>
                    </table>

                </div>                
            </div>
        </>
    );
}

export default UserClient;