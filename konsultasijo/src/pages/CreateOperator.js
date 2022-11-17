import React,{useState}  from "react";
import Navigation from "../components/Navigation";
import '../assets/button.css'
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref,set } from "firebase/database";
import app from '../configs/firebase'

const split={
    display: 'flex',
    flexDirection: 'row',
}

const CreateOperator = () => {
  const [fullname,setfullname] = useState('')
  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const [handle,setHandle] = useState('')

  const datas={
    id:uuidv4(),
    fullname:fullname,
    username:username,
    password:password,
    role:"operator",
    handle
  }

  function writeUserData(datas) {
    console.log(fullname,username,password);
    const db = getDatabase(app);
    set(ref(db, 'users/'+datas.id), datas).then(()=>{
      setfullname('')
      setusername('')
      setpassword('')
      setHandle('')
    })
  }

    return(
        <>
            <div style={split}>
                <Navigation />
                <div className="gap">

                    <h1>Buat Akun</h1>

                    {/* Masukan Judul */}
                    <p>Nama</p>
                    <div class="input-group flex-nowrap mb-2">
                      <input type="text" name="fullname" class="form-control" value={fullname} onChange={e=>setfullname(e.target.value)} placeholder="Masukan Nama" required/>
                    </div>

                    {/* Masukan Judul */}
                    <p>Nama Pengguna</p>
                    <div class="input-group flex-nowrap mb-2">
                      <input type="text" name="username" class="form-control" value={username} onChange={e=>setusername(e.target.value)} placeholder="Masukan Nama Pengguna" required/>
                    </div>

                    {/* Masukan Judul */}
                    <p>Kata Sandi</p>
                    <div class="input-group flex-nowrap mb-2">
                      <input type="text" name="password" class="form-control" value={password} onChange={e=>setpassword(e.target.value)} placeholder="Masukan Kata sandi" required/>
                    </div>

                    <p>Kasus</p>
                    <div style={{display:'flex',flexDirection:'column'}} onChange={e=>setHandle(e.target.value)} >
                      <div>
                        <input type="radio" name="handle" value="perdata" required/>
                        <label>Perdata</label>
                      </div>
                      <div>
                        <input type="radio" name="handle" value="perdana" required/>
                        <label>Perdana</label>
                      </div>
                    </div>

                    {/* button */}
                    <button className="buttonSubmit" type="submit" onClick={()=>writeUserData(datas)}>Posting</button>

                </div>
            </div>
        </>
    );
}

export default CreateOperator;
