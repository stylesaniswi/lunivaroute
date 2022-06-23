import React,{useState, useEffect} from 'react';
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



const Bargraph2=()=> {
    const [datas, setData] = useState([]);
  const value = require('./demoval.json').BarData;

  useEffect(() => {
    setData(value);
  }, []);
  console.log(datas);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
        interaction: {
            intersect: false,
          },
          scales: {
            x: {
              stacked: true,
            
            },
            y: {
              stacked: true,
              min:0,
              max:10,
              steps:1,

            },
            
          },
          
        
      };
      
      const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Used',
            data: datas.map((row)=>{
                if(row.name === "Vehice Used"){
                    return(row.numberofV)
                }
            }),
            backgroundColor: '#ff6384',
            stack:'Stack 0',
          },
          {
            label: 'Remaining',
            data: [34,56,120,43,56,78,23],
            backgroundColor: '#36a2eb',
            stack: 'stack 1'
          },
        ],
      };

  return (
  <Bar options={options} data={data} />
  )
}

export default Bargraph2;
