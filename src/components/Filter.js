import { Input ,Table } from 'antd';
import React, { useEffect, useState } from 'react';
import {SearchOutlined} from '@ant-design/icons'


const {Search} = Input
  

function Filter() {
    const [details, setDetails] = useState([]);
    const [loading, setloading] = useState(true);
    const [q, setQ] = useState("");
       
    useEffect(() => {
      getData();
    },[]);
  
    const getData = async () => {
      const res = await fetch('https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/GetCounterDetails')
      .then(res=>res.json())
      .then(json=>setDetails(json.CounterDetails))
      setloading(false);
    };
const data = details.map(row => ({ key:row.CId, cid: row.CId, counterlocation: row.CounterLocation, countername:row.CounterName , entrydate: row.EntryDate }));
    function search(rows){
        return rows.filter(
            (row)=> 
            row.countername.toLowerCase().includes(q.toLowerCase()) ||
            row.CId == q ||
            row.counterlocation.toLowerCase().includes(q.toLowerCase())||
            row.entrydate.includes(q)
            );
    }

    const columns = [
        {
          title: 'CId',
          dataIndex: 'cid',
        
        },
        {
          title: 'Counter Name',
          dataIndex: 'countername',
        },
        {
          title: 'Counter Location',
          dataIndex: 'counterlocation',
          
        },
          {
            title: 'Entry Date',
            dataIndex: 'entrydate',
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
            <Table columns={columns} dataSource={search(data)} />
        </div>
    </div>
  )
}

export default Filter