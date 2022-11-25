import React,{useState,useRef,useEffect} from "react";
import Navigation from "../components/Navigation";
import FocusTrap from 'focus-trap-react';
import { v4 as uuidv4 } from 'uuid';
import '../assets/gap.css';
import ImgDeleteUser from '../assets/deleteUser.svg';
import Edit from '../assets/pencil.svg';
import { getDatabase, ref as databaseRef,set,onValue,remove ,update} from "firebase/database";
import { getStorage, ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import app from '../configs/firebase'
import moment from 'moment-timezone';
import { Link } from "react-router-dom";

const split={
    display: 'flex',
    flexDirection: 'row',
}

const Form = ({ item }) => {
  const judul = useRef('')
  const tahun = useRef('')
  const nomor = useRef('')
  const jenis = useRef('')

  const updateNews = (item)=>{
    const db = getDatabase(app)
    const dbRef = databaseRef(db,`phukum/${item.id}`);
    update(dbRef,{
      judul:judul.current.value,
      tahun:tahun.current.value,
      nomor:nomor.current.value,
      jenis:jenis.current.value,
      timeStamps:moment().format('')
    }).then(()=>console.log('success'))
  }

  return (
    <form onSubmit={()=>updateNews(item)}>
      <div className="form-group">
        <label htmlFor="name">Tahun</label>
        <input ref={tahun} className="form-control" id="tahun" placeholder={item.tahun}/>
      </div>
      <div className="form-group">
        <label htmlFor="name">Nomor</label>
        <input ref={nomor} className="form-control" id="nomor" placeholder={item.nomor}/>
      </div>
      <div className="form-group">
        <label htmlFor="name">Judul</label>
        <input ref={judul} className="form-control" id="judul" placeholder={item.judul}/>
      </div>
      <div className="form-group">
        <label htmlFor="name">Jenis</label>
        <input ref={jenis} className="form-control" id="jenis" placeholder={item.jenis}/>
      </div>
      <div className="form-group">
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

const ProdukHukum = () => {
  const judul = useRef('')
  const tahun = useRef('')
  const nomor = useRef('')
  const jenis = useRef('')
  const [file,setFile] = useState(null)
  const [percent, setPercent] = useState(0);
  const [phukum, setPHukum] = useState([]);
  const [search,setSearch] = useState('')
  const [showModal,setShowModal] = useState(false)
  const [items,setItems] = useState()

  const showModals = (item)=>{
    setShowModal(true)
    setItems(item)
  }

  const closeModal = ()=>{
    setShowModal(false)
  }

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  const onClickOutside=(e)=>{
    if(e.target.tagName === "ASIDE") {
      closeModal()
    } else {
      return
    }
  }

  const searchItem = (value,query)=>{
    const keys = ['tahun','nomor', 'judul','jenis']
    return value?.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }

  const searchData = searchItem(phukum,search)

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
            file:downloadURL,
            timeStamps:moment().format('')
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

      if (snapshot.val() === (null||undefined||[])) {
        return false
      } else{
        const data = Object.values(snapshot.val()!== null ? snapshot.val() : '')
        setPHukum(data.length>0 ? data.sort((a,b)=> b.timeStamps < a.timeStamps ? -1 : 1) : [])
      }
    });
  }

  const deletePhukum = (item)=> {
    const db = getDatabase(app)
    const dbRef = databaseRef(db,`phukum/${item.id}`);
    if (window.confirm("Setuju untuk menghapus?")) {
      remove(dbRef)
      .then(alert("Product deleted."))
      .catch((error) => console.error(false));
      const datas={
        id:item.id,
        judul:item.judul,
        tahun:item.tahun,
        nomor:item.nomor,
        jenis:item.jenis,
        file:item.file,
        timeStamps:item.timeStamps
      }
      const db = getDatabase(app)
      set(databaseRef(db, 'ProductArchives/'+item.id), datas);
    }
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

          <div>
            <p>{percent} % done</p>
            <Link to="/archived" class="col-auto">
              <button type="submit" class="btn btn-primary mb-3" onClick={submit}>See Archived PH</button>
            </Link>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <input type="text" class="form-control" placeholder="Cari disini" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          </div>

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

                  {searchData.map((item,index)=>(
                    <tr key={item.id}>
                      <td>{item.tahun}</td>
                      <td>{item.nomor}</td>
                      <td>{item.judul}</td>
                      <td>{item.jenis}</td>
                      <td>PDF</td>
                      <td type="button" onClick={()=>deletePhukum(item)}><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                      <td type="button" onClick={()=>showModals(item)}><img src={Edit} alt="UpdateAccount" /></td>
                    </tr>
                  ))}

              </tbody>
          </table>
          {showModal===true ?
            <FocusTrap>
              <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                onKeyDown={onKeyDown}
                onClick={onClickOutside}
              >
                <button
                  aria-label="Close Modal"
                  aria-labelledby="close-modal"
                  className="_modal-close"
                  onClick={closeModal}
                >
                  <span id="close-modal" className="_hide-visual">
                    Close
                  </span>
                  <svg className="_modal-close-icon" viewBox="0 0 40 40">
                    <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                  </svg>
                </button>
                <div className="modal-area">
                  <Form item={items}/>
                </div>
              </aside>
            </FocusTrap> : null}
          </div>
      </div>
  )
}

export default ProdukHukum;
