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
import moment from 'moment-timezone';

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
  const datas = categories.map((item,index,arr)=>{
    const time = moment(item.time).format('LL')
    const values = time.includes(labels[10]) ?  item?.value : 0
    return values
  })
  let sum = 0

  for (var val of datas) {
    sum+=val
    console.log(sum);
  }

  // console.log(datas);
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data:datas,
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
    const getCategories = ()=>{
      const db = getDatabase(app)
      const dbRef = ref(db,'/categoriesDatas');
      onValue(dbRef, (snapshot) => {
        setCategories(Object.values(snapshot.val()));
        // console.log(Object.values(snapshot.val()));
      });
    }
    useEffect(()=>{
      getCategories()
    },[])

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
