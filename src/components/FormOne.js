import {
  Button,

  DatePicker,
  Form,
  Input,
  InputNumber,


  Switch,

} from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';

const FormOne = (props) => {
  const [componentSize, setComponentSize] = useState('default');
  const [dataSource, setDataSource] = useState()
  const [searchParams, setSearchParams] = useSearchParams();
  const Cid = parseInt(searchParams.get("q"));
  const axios =require('axios').default;

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () =>{
    await fetch("https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/GetCounterDetails ")
    .then(res => res.json())
    .then(
      (result) => {
        let res = result.CounterDetails
        const vari = res.map((js) => {
          if (js.CId === Cid) {
            // return js;
            setDataSource(js);
          }
          return ''
        })

      },
    )
  }
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const generateUrlEncodedData = (initialObject) => {
    const formData = Object.keys(initialObject)
      .map((key) => {
        // if (initialObject[key]) {
          return `${key}=${encodeURIComponent(initialObject[key])}`
        // }else{
        //     return ''
        // }
      })
      .join('&');
    return formData;
  }

  const onFinish = (values) => {
    let postVal={}
    if (values !== undefined) {
      postVal = {
        CId: Cid,
        ...values,
        EntryDate: moment(values?.EntryDate).format()
      }}
      let datum = generateUrlEncodedData(postVal)
      console.log(postVal);
      pushToAPI('https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/InsertUpdateCounterDetails',datum)
  };
 

  const pushToAPI =  (url,data)=>{
    console.log(data);
    axios.post(url,data)
    .then(function (response) {
      console.log("Successful",response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  let prevVal = {}
  if (dataSource !== undefined) {
    prevVal = {
      ...dataSource,
      EntryDate: moment(dataSource?.EntryDate)
    }
  }
  
  return (
    <>
    {
      dataSource !== undefined &&
      <Form
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={prevVal}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
       

        <Form.Item name="CounterName" type="text" label="Counter Name">
          <Input />
        </Form.Item>
        <Form.Item name="CounterLocation" type="text" label="Counter Location">
          <Input />
        </Form.Item>
        <Form.Item name="CompanyId" type="number" label="CompanyId">
          <InputNumber />
        </Form.Item>
        <Form.Item label="EntryDate" name="EntryDate">
          <DatePicker />
        </Form.Item>

        <Form.Item label="IsActive" name="IsActive" valuePropName="checked" >
          <Switch />
        </Form.Item>
        <Form.Item >
          <Button htmlType='submit'
            type='link'
          >Save</Button>

        </Form.Item>
      </Form>
    }
       
    </>
    

   

  )
}
export default FormOne;