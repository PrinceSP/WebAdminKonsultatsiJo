import React,{useState,useEffect} from "react";
import Navigation from "../components/Navigation";
import ImgCreateAccount from '../assets/createAccount.svg';
import ImgDeleteUser from '../assets/deleteUser.svg';
import { Link } from "react-router-dom";
import { getDatabase, ref ,onValue, remove } from "firebase/database";
import app from '../configs/firebase'
// import { getDatabase, ref as ref,set,onValue,remove } from "firebase/database";

const split={
    display: 'flex',
    flexDirection: 'row',
}

const UserClient = () => {
  const [users,setUsers] = useState([])
  const [search,setSearch] = useState('')

  let searchItem = (value,query)=>{
    const keys = ['nik','name', 'id','email']
    return value?.filter(item=>
      keys.some(key=>item[key]?.toLowerCase().includes(query))
      // console.log(item);
    )
  }

  let searchData = searchItem(users,search)

  const getUsers = ()=>{
    const db = getDatabase(app)
    const dbRef = ref(db,'users/');
    onValue(dbRef, (snapshot) => {
      setUsers(Object.values(snapshot.val()));
    });
  }

  const deleteClient = (item)=> {
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
  // console.log(users);

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

                <Link className="nav-link text-white mb-3" to="/createClient"><p className="cAkun"><img src={ImgCreateAccount} alt="CreateAccount" /> Buat Akun</p></Link>
                  <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Cari berdasarkan ID, NIK, Nama, Alamat Email" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                  </div>
                    <table class="table table-hover me-5">
                        <thead>
                          <tr>
                            <th scope="col">NIK</th>
                            <th scope="col">FullName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchData.map((item,index)=>(
                            item.role==="customer" ? <tr key={index}>
                              <td>{item.nik}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td type="button" onClick={()=> deleteClient(item)}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr> : null
                          ))}
                        </tbody>
                    </table>

                </div>
            </div>
    );
}

export default UserClient;
