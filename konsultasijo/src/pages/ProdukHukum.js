import React,{useState,useRef,useEffect} from "react";
import Navigation from "../components/Navigation";
import { v4 as uuidv4 } from 'uuid';
import '../assets/gap.css';
import ImgDeleteUser from '../assets/deleteUser.svg';
import { getDatabase, ref as databaseRef,set,onValue,remove } from "firebase/database";
import { getStorage, ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import app from '../configs/firebase'

const split={
    display: 'flex',
    flexDirection: 'row',
}

const ProdukHukum = () => {
  const judul = useRef('')
  const tahun = useRef('')
  const nomor = useRef('')
  const jenis = useRef('')
  const [file,setFile] = useState(null)
  const [percent, setPercent] = useState(0);
  const [phukum, setPHukum] = useState([]);
  // console.log(fileUrl);

  const submit = ()=>{

    const storage = getStorage(app)
    if (!file) return;
    const storageRef = ref(storage,`files/${file.name}`)

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(progress)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
           console.log('not running');
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // setFileUrl(downloadURL)
          const datas={
            id:uuidv4(),
            judul:judul.current.value,
            tahun:tahun.current.value,
            nomor:nomor.current.value,
            jenis:jenis.current.value,
            file:downloadURL
          }
          const db = getDatabase(app)
          set(databaseRef(db, 'phukum/'+datas.id), datas);
        });
        // setFile(null)
        // setImgUrl(null)
      }
    );
  }

  const fileChange=(e)=>{
    e.preventDefault()
    setFile(e.target.files[0])
  }

  const getUsers = ()=>{
    const db = getDatabase(app)
    const dbRef = databaseRef(db,'phukum/');
    onValue(dbRef, (snapshot) => {
      setPHukum(Object.values(snapshot.val()));
    });
  }

  const deletePhukum = (item)=> {
    const db = getDatabase(app)
    const dbRef = databaseRef(db,`phukum/${item.id}`);
    remove(dbRef)
    .then(alert("Product deleted."))
    .catch((error) => console.error(false));
  }
  useEffect(()=>{
    getUsers()
  },[])

  return(
    <div style={split}>
      <Navigation />
      <div className="gap">
          {/* Masukan Tahun */}
          <div class="input-group flex-nowrap mb-2">
            <input type="text" class="form-control" placeholder="Masukan Tahun" ref={tahun}/>
          </div>

          {/* Masukan Nomor */}
          <div class="input-group flex-nowrap mb-2">
            <input type="text" class="form-control" placeholder="Masukan Nomor" ref={nomor}/>
          </div>

          {/* Masukan Judul */}
          <div class="input-group flex-nowrap mb-2">
            <input type="text" class="form-control" placeholder="Judul" ref={judul}/>
          </div>

          {/* Masukan Jenis */}
          <div class="input-group flex-nowrap mb-2">
            <input type="text" class="form-control" placeholder="Jenis" ref={jenis}/>
          </div>

          {/* Masukan PDF */}
          <div class="input-group flex-nowrap mb-2">
            <input type="file" class="form-control" placeholder="Masukan PDF" onChange={fileChange}/>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-danger mb-3 form-control" onClick={submit}>Posting</button>
          </div>

          <p>{percent} % done</p>

          <table class="table table-hover me-5">
              <thead>
                  <tr>
                  <th scope="col">Tahun</th>
                  <th scope="col">Nomor</th>
                  <th scope="col">Judul</th>
                  <th scope="col">Jenis</th>
                  <th scope="col">PDF</th>
                  <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>

                  {phukum.map((item,index)=>(
                    <tr key={index}>
                      <td>{item.tahun}</td>
                      <td>{item.nomor}</td>
                      <td>{item.judul}</td>
                      <td>{item.jenis}</td>
                      <td>PDF</td>
                      <td type="button" onClick={()=>deletePhukum(item)}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                    </tr>
                  ))}

              </tbody>
          </table>
          </div>
      </div>
  )
}

export default ProdukHukum;
