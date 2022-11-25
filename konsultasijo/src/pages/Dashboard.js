import React,{useContext,useEffect,useState} from "react";
import Navigation from "../components/Navigation";
import '../assets/gap.css';
import '../assets/styles.css';
import { AuthContext } from "../context/AuthContext";
import app from '../configs/firebase'
import { getDatabase, ref ,onValue } from "firebase/database";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const split={
    display: 'flex',
    flexDirection: 'row',
}

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const [categories,setCategories] = useState([])

  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  // console.log(getDatas);
  // console.log(categories)  // const val = 0
  // for (var key in getDatas) {
  //   console.log(getDatas[key].value);
  // }
  // const datas = labels.map((item,index,arr)=>{
  //   const find = item.includes(getProperty[0].slice(0,3 - 1))
  //
  //   return find
  // })
  // console.log(val);
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data:[12,13,14],
        backgroundColor: [
          "#8D2179",
          "#C9E265",
          "#E5775E",
          "#000000",
          "#E0E2E2",
          "#8F78C6",
          "#3D4C97",
          "#8D2179",
          "#C9E265",
          "#E5775E",
          "#000000",
          "#E0E2E2",
        ],
        borderWidth: 1,
      }
    ]
  }

  const getCategories = async()=>{
    try {
      const db = await getDatabase(app)
      const dbRef = await ref(db,'/categoriesDatas');
      await onValue(dbRef,(snapshot) => {
       setCategories((state) => [snapshot.val()]);
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
      getCategories()
  },[])

  // const getProperty = categories!== null || categories!==[] || categories!== undefined ? Object.getOwnPropertyNames(categories?.years['2022'].months) : ''

  console.log(categories);

    return(
      <div style={split}>
        <Navigation />
        <div className="gap">
          <h5>Selamat Datang, Admin {user.name}</h5>
          <p>statistik</p>
            <div>
              <Bar
                datasetIdKey='id'
                data={data}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Statistik Konsultasi Hukum',
                    },
                  },
                }}
              />
            </div>
        </div>
      </div>
    );
}

export default Dashboard;
