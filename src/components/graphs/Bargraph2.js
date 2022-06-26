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

import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;


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
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
  // const value = require('./demoval.json').BarData;

  useEffect(() => {
    getData();
    setdata();
  }, []);

  useEffect(()=>{
    getData();
    setData();
  },startDate,endDate)
  console.log("dataaaaa",datas);

  const getData = async () => {
    await fetch(`https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/GetCounterWiseTotalCollectionAmt?fromdate=${startDate}&todate=${endDate}&comapnyid=2`)
    .then(res=>res.json())
    .then(json=>setData(json.CounterWiseCOllectionTotal))
  };

  const setdata =() =>{
    if(datas===undefined){
      setX();
      setY();
    }
    setX(datas.map((row)=>{
      return (row.COunter)
       }) );
    
       setY(datas.map((row)=>{
        return (row.TotalAmt)
         }) );
  }

  


//  console.log("range",startDate,endDate);

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
           },
            
          },
          
        
      };
      
      const labels = x;
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Used',
            data: y,
            backgroundColor: '#36a2eb',
            stack:'Stack 0',
          },
          // {
          //   label: 'Remaining',
          //   data: [34,56,120,43,56,78,23],
          //   backgroundColor: '#36a2eb',
          //   stack: 'stack 1'
          // },
        ],
      };

      const handleOk =() =>{
        alert("success")
      }

      const handleChange=(value,dateString)=> {
        setStartDate(dateString[0]);
        setEndDate(dateString[1]);
        console.log('Formatted Selected Time: ', dateString);
      }

  return (
    <>
    <Space direction="vertical" size={12}>
    <RangePicker 
    allowClear={false}
    id="date" name= "date"
    style={{ width: '547px', marginLeft:'20px'}} 
    separator="-" 
    onChange={handleChange}
    format="YYYY-MM-DD"
    onOk={handleOk}
    />
  </Space>
  <Bar options={options} data={data} />
    </>
  )
}

export default Bargraph2;
