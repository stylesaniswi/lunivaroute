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
      console.log(val);
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
    <Option value="vehicle">Vehicle</Option>
    <Option value="staff">Staff</Option>
    <Option value="route">Route</Option>
    <Option value="GetCounterDetails">Counter</Option>
  </Select>
  <Button onClick={()=>setShow(true)}>Load</Button>
  {show &&
        <Filter
        value ={val} 
        />
  }

    </div>
  )
}

export default Tablefilter