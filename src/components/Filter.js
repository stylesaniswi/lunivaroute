import { Input ,Space, Table, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import {SearchOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'


const {Search} = Input

  

function Filter(props) {
  const navigate =useNavigate();
    const [details, setDetails] = useState([]);
    const [loading, setloading] = useState(true);
    const [q, setQ] = useState("");
    const {value} = props;
    const detailOf = value.split('Get');
    const axios =require('axios').default;
    useEffect(() => {
      getData();
    },[]);
  
    const getData = async () => {
      await fetch(`https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/${value}`)
      .then(res=>res.json())
      .then(json=>setDetails(json[detailOf[1]]))
      setloading(false);
    };
   
  
    function search(rows){
        return rows.filter(
            (row)=> 
            row.CounterName.toLowerCase().includes(q.toLowerCase()) ||
            row.CId == q ||
            row.CounterLocation.toLowerCase().includes(q.toLowerCase())||
            row.EntryDate.includes(q)
            );
    }

    // details.map() => {  
    //   return(

    //   )
      
    // }
    const columns = [
        {
          title: 'CId',
          dataIndex: 'CId',
        
        },
        {
          title: 'Counter Name',
          dataIndex: 'CounterName',
        },
        {
          title: 'Counter Location',
          dataIndex: 'CounterLocation',
          
        },
          {
            title: 'Entry Date',
            dataIndex: 'EntryDate',
          },
          {
            title: 'Company ID',
            dataIndex: 'CompanyId',
          },
          {
            title: 'Action',
            key: 'action',
            render: (details) => (
              <Space size="middle">
                <Button type = "link" onClick={()=>{
                  navigate(`./FormOne?q=${details.CId}`)
                } }>Edit</Button>
                <Button  type = "link" >Delete</Button>
              </Space>
            ),
          },
        ];
      
  return (
    <div>
        <div>
        <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      style={{ width: 304 }}
      onChange={(e)=> setQ(e.target.value)}
      onSearch={(e)=> setQ(e.target.value)}
    />
        </div>
        <div>
            <Table columns={columns} dataSource={search(details)} />
        </div>
    </div>
  )
}

export default Filter