import React,{useEffect,useState} from "react";
// import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import ImgCreateAccount from '../assets/createAccount.svg';
import ImgDeleteUser from '../assets/deleteUser.svg';
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import app from '../configs/firebase'

const split={
    display: 'flex',
    flexDirection: 'row',
}

const UserOperator = () => {
  const [users,setUsers] = useState([])
  const getUsers = ()=>{
    const db = getDatabase(app)
    const dbRef = ref(db,'users/');
    onValue(dbRef, (snapshot) => {
      if (snapshot.val()===null) {
        return false
      }
      setUsers(Object.values(snapshot.val()));
    });
  }

  const deleteOperator = (item)=> {
    const db = getDatabase(app)
    const dbRef = ref(db,`users/${item.id}`);
    // console.log(item);
    remove(dbRef)
    .then(alert("Product deleted."))
    .catch((error) => console.error(false));
  }

  useEffect(()=>{
    getUsers()
  },[])
  console.log(users);
    return(
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

                <Link className="nav-link text-white mb-3" to="/createOperator"><p className="cAkun"><img src={ImgCreateAccount} alt="CreateAccount" /> Buat Akun</p></Link>

                    <table class="table table-hover me-5">
                        <thead>
                          <tr>
                          <th scope="col">Nama Pengguna</th>
                          <th scope="col">FullName</th>
                          <th scope="col">Email</th>
                          <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>

                          {users.map((item,index)=>(
                            item.role==="operator" ? <tr key={index}>
                              <td>{item.fullname}</td>
                              <td type="button" onClick={()=> deleteOperator(item)}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr> : null
                          ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}

export default UserOperator;
