import React,{useContext} from "react";
import Navigation from "../components/Navigation";
import '../assets/gap.css';
import '../assets/styles.css';
import { AuthContext } from "../context/AuthContext";
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

  const data = {
          labels: [['Perkawinan','Pencurian'], ['Waris','Penganiayaan'], ['Kekeluargaan','Pembunuhan'],['Perikatan','Pencemaran Nama Baik'],['Kekayaan','Perusakan Barang'],['Perceraian','ITE'],['Pencemaran Nama Baik','Perselingkuhan'],'Pemerasan'],
          // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
          datasets: [
              {
                label: 'Popularity of colours',
                data: [55, 23, 96,11,12,13,144],
                // you can set indiviual colors for each bar
                backgroundColor: [
                  "#8D2179",
                  "#C9E265",
                  "#E5775E",
                  "#FFFFFF",
                  "#E0E2E2",
                  "#8F78C6",
                  "#3D4C97"
                ],
                borderWidth: 1,
              },{
                label: 'Popularity of colours',
                data: [ 23,55, 96,11,12,13,144,200],
                // you can set indiviual colors for each bar
                backgroundColor: [
                  "#A3D5E0",
                  "#29435C",
                  "#9F3F41",
                  "#AECFF6",
                  "#0ACFC9",
                  "#091C2B",
                  "#F79764"
                ],
                borderWidth: 1,
              }
          ]
  }

    return(
      <div style={split}>
        <Navigation />
        <div className="gap">
          <h5>Selamat Datang, Admin {user.name}</h5>
          <p>statistik</p>
            <div>
              <Bar
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
