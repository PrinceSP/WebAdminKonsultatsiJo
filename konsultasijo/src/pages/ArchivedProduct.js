import React,{useState,useEffect} from "react";
import Navigation from "../components/Navigation";
import '../assets/gap.css';
import { getDatabase, ref as databaseRef,onValue} from "firebase/database";
import app from '../configs/firebase'
import { Link } from "react-router-dom";

const split={
    display: 'flex',
    flexDirection: 'row',
}

const Archived = () => {
  const [phukum, setPHukum] = useState([]);
  const [search,setSearch] = useState('')

  const searchItem = (value,query)=>{
    const keys = ['tahun','nomor', 'judul','jenis']
    return value?.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }

  const searchData = searchItem(phukum,search)

  const getUsers = ()=>{
    const db = getDatabase(app)
    const dbRef = databaseRef(db,'ProductArchives/');
    onValue(dbRef, (snapshot) => {

      if (snapshot.val() === (null||undefined||[])) {
        return false
      } else{
        const data = Object.values(snapshot.val()!== null ? snapshot.val() : '')
        setPHukum(data.length>0 ? data.sort((a,b)=> b.timeStamps < a.timeStamps ? -1 : 1) : [])
      }
    });
  }

  useEffect(()=>{
    getUsers()
  },[])

  return(
    <div style={split}>
      <Navigation />
      <div className="gap">
          <Link to="/produkHukum" class="col-auto">
            <button type="submit" class="btn btn-primary mb-3" >Back</button>
          </Link>
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
                    </tr>
                  ))}

              </tbody>
          </table>
        </div>
      </div>
  )
}

export default Archived;
