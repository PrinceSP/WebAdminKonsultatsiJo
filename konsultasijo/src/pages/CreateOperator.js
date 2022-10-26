import React,{useRef}  from "react";
import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import '../assets/button.css'
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref,set } from "firebase/database";
import app from '../configs/firebase'

const split={
    display: 'flex',
    flexDirection: 'row',
}

const CreateOperator = () => {
  const fullname = useRef('')
  const username = useRef('')
  const password = useRef('')

  const datas={
    id:uuidv4(),
    fullname:fullname.current.value,
    username:username.current.value,
    password:password.current.value,
    role:"operator"
  }

  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase(app);
    set(ref(db, 'users/'+datas.id), datas);
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
                    <input type="text" name="fullname" class="form-control" ref={fullname} placeholder="Masukan Nama" required/>
                    </div>

                    {/* Masukan Judul */}
                    <p>Nama Pengguna</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" name="username" class="form-control" ref={username} placeholder="Masukan Nama Pengguna" required/>
                    </div>

                    {/* Masukan Judul */}
                    <p>Kata Sandi</p>
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" name="password" class="form-control" ref={password} placeholder="Masukan Kata sandi" required/>
                    </div>

                    {/* button */}
                    <button className="buttonSubmit" type="submit" onClick={writeUserData}>Posting</button>

                </div>
            </div>
        </>
    );
}

export default CreateOperator;
