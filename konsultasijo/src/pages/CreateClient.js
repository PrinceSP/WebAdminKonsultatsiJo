import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import '../assets/button.css'


const CreateClient = () => {
    return(
      <div className="containerCreateClient">
        <Navigation />
        <div className="container-item-form">
          <div className="navigate">
            <Link className="nav-link color-zero" aria-current="page" to="/userClient">
              <h1>{'<'}</h1>
            </Link>
            <h1>Buat Akun</h1>
          </div>

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

          {/* Masukan Email */}
          <p>Email</p>
          <div class="input-group flex-nowrap mb-2">
          <input type="text" class="form-control" placeholder="Masukan email"/>
          </div>

          {/* Masukan Judul */}
          <p>Kata Sandi</p>
          <div class="input-group flex-nowrap mb-2">
          <input type="text" class="form-control" placeholder="Masukan Kata Sandi"/>
          </div>

          {/* button */}
          <button className="buttonSubmit" type="submit">Buat Akun</button>

        </div>
      </div>
    );
}

export default CreateClient;
