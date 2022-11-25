import React,{useRef,useState,useEffect} from "react";
import FocusTrap from 'focus-trap-react';
import Navigation from "../components/Navigation";
import '../assets/news.css';
import ImgDeleteUser from '../assets/deleteUser.svg';
import Edit from '../assets/pencil.svg';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref as databaseRef,set,onValue,remove ,update} from "firebase/database";
import { getStorage, ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import app from '../configs/firebase'
import moment from 'moment-timezone';

const split={
    display: 'flex',
    flexDirection: 'row',
}

const Form = ({ item }) => {
  const judul = useRef('')
  const link = useRef('')

  const updateNews = (item)=>{
    const db = getDatabase(app)
    const dbRef = databaseRef(db,`news/${item.id}`);
    update(dbRef,{
      judul:judul.current.value,
      link:link.current.value
    }).then(()=>console.log('success'))
  }

  return (
    <form onSubmit={()=>updateNews(item)}>
      <div className="form-group">
        <label htmlFor="name">Judul</label>
        <input ref={judul} className="form-control" id="judul" placeholder="Terjadi kecelakaan di benua afrika"/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Link</label>
        <input
          type="text" ref={link}
          className="form-control"
          id="link"
          placeholder="https://ec.europa.eu/commission/presscorner/detail/en/MEX_22_7152"
        />
      </div>
      <div className="form-group">
        <button className="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

const News = () => {
  const judul = useRef('')
  const link = useRef('')
  const [file,setFile] = useState(null)
  const [percent, setPercent] = useState(0);
  const [news,setNews] = useState([])
  const [items,setItems] = useState()
  const [showModal,setShowModal] = useState(false)

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

  const writeUserData = ()=>{
    const storage = getStorage(app)
    if (!file) return;

    const storageRef = ref(storage,`images/${file.name}`)

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
          const datas={
            id:uuidv4(),
            judul:judul.current.value,
            link:link.current.value,
            image:downloadURL,
            timeStamps:moment().format('')
          }
        const db = getDatabase(app);
        set(databaseRef(db, 'news/'+datas.id), datas);
        });
      }
    );
  }

  const fileChange = (e)=>{
    e.preventDefault()
    setFile(e.target.files[0])
  }

  const GetNews = ()=>{
    const db = getDatabase(app)
    const dbRef = databaseRef(db,'news/');
    onValue(dbRef, (snapshot) => {

      if (snapshot.val() === (null||undefined||[])) {
        return false
      } else{
        const data = Object.values(snapshot.val()!== null ? snapshot.val() : '')
        // console.log(data.length);
        // console.log(data);
        setNews(data.length>0 ? data.sort((a,b)=> b.timeStamps < a.timeStamps ? -1 : 1) : [])
      }
    });
  }

  const deleteNews = async(item)=> {
    const db = getDatabase(app)
    const dbRef = await databaseRef(db,`news/${item.id}`);
    if(window.confirm("Setuju untuk menghapus?")){
      remove(dbRef)
      .then(console.log("news deleted."))
      .catch((error) => console.error(false));
    }
  }

  useEffect(()=>{
    GetNews()
  },[])
  // console.log(imgUrl);
    return(
        <div style={split}>
         <Navigation/>
         <div className="gap">

          {/* Masukan Judul */}
          <div class="input-group flex-nowrap mb-2" style={{display: 'flex',}}>
            <input type="text" class="form-control" placeholder="Masukan Judul" ref={judul}/>
          </div>

          {/* Masukan Link */}
          <div class="input-group flex-nowrap mb-2">
            <input type="text" class="form-control" placeholder="Masukan Link" ref={link}/>
          </div>

          {/* Masukan Gambar */}
          <div class="input-group flex-nowrap mb-2">
            <input type="file" accept="/image/*" class="form-control" placeholder="Masukan Gambar" onChange={fileChange}/>
          </div>

          <div class="col-auto">
            <button class="btn btn-danger mb-3 form-control" onClick={writeUserData}>Posting</button>
          </div>
          <p>{percent} % done</p>
          <div className="wrapper">
              {news.map((item)=>(
                <div key={item.id} className="newsWrapper" style={{display: 'flex'}}>
                  <div>
                    <p>{item.judul}</p>
                    <a href={item.link} target="_blank" rel="noreferrer">Link berita</a>
                  </div>
                  <a href={item.image} rel="noopener noreferrer" target="_blank">
                    <img  src={item.image} alt="News" className="imgberita" target="_blank"/>
                  </a>
                  <img className="imgbutton" type="button" onClick={()=>deleteNews(item)} src={ImgDeleteUser} alt="DeleteNews" />
                  <img className="imgbutton" type="button" onClick={()=>showModals(item)} src={Edit} alt="EditNews" />
                </div>
              ))}
          </div>
        </div>
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
    );
}

export default News;
