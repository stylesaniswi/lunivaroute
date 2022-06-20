import React, { useState } from 'react'
import { Select,Button } from 'antd';
import Filter from './Filter';
const { Option } = Select;

function Tablefilter() {
    const[val,setVal] = useState("");
    const [show ,setShow] =useState(false);
    const onChange = (value) => {
        setVal(value);
        setShow(false)
      };
      
      const onSearch = (value) => {
        setVal(value);
        setShow(true)
      };
  return (
    <div>
         <Select
    showSearch
    placeholder="Select your choice"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    <Option value="GetVehicleDetails">Vehicle</Option>
    <Option value="GetStaffDetails">Staff</Option>
    <Option value="GetRouteDetails">Route</Option>
    <Option value="GetCounterDetails">Counter</Option>
    <Option value="GetUserDetails">User</Option>
  </Select>
  <Button 
  type='primary'
  style={{marginBottom:10}}
  onClick={()=>setShow(true)}>Load
  </Button>
  {show &&
        <Filter
        value ={val} 
        />
  }

    </div>
  )
}

export default Tablefilter