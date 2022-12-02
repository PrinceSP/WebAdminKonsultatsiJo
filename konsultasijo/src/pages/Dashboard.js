import React,{useContext,useMemo,useState} from "react";
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
  const [categories,setCategories] = useState()

  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

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

  const db = getDatabase(app)

  useMemo(()=>{
    const dbRef = ref(db,'/categoriesDatas');
    onValue(dbRef,(snapshot) => {
     const datas = snapshot.val()
     if (datas !== null) {
      setCategories(datas);
     }
     // console.log(datas);
    });
    // console.log(dbRef);
  },[])

  const getProperty = categories?.years['2022']

  console.log(getProperty);

    return(
      <div style={split}>
        <Navigation />
        <div className="gap">
          <h5>Selamat Datang, Admin {user.name}</h5>
          <p>statistik</p>
          {categories ? <div>
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
        </div> : null}
        </div>
      </div>
    );
}

export default Dashboard;
