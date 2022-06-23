import React, { useState } from 'react'
import { Select,Button } from 'antd';
import StaffType from './forms/StaffType';
import UpdateRole from './forms/UpdateRole';
const { Option } = Select;

function Formfilter() {
  
  // const myUser=useSelector((state)=>state.user);
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
    <Option value="stafftype">Staff Type</Option>
    <Option value="Role">Role</Option>
  </Select>
  <Button 
  type='primary'
  style={{marginBottom:10}}
  onClick={()=>setShow(true)}>Load
  </Button>
  {show &&
   (val === 'stafftype') && <StaffType /> 
  }
  {show &&
   (val === 'Role') && <UpdateRole /> 
  }

    
    </div>
  )
}

export default Formfilter