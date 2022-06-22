import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './login.css'

import {  useDispatch } from "react-redux";
import { userStatus, userName} from "../action/index";


function Login() {
  const [users ,setUsers] = useState([]);

  // const myState= useSelector((state)=>state.changeTheNumber);
 
  // console.log(myColor);
  const dispatch = useDispatch();

  // useEffect(() => {
  // const userVal = require('./demo.json');
  // setUsers(userVal);
  // }, [])
  


  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    const getUserData = async () => {
      await fetch(`https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/CheckValidLogin?username=${values.username}&password=${values.password}`)
      .then(res=>res.json())
      .then(json=>setUsers(json.UserDetails))
    };
    {values?getUserData():console.log("send values properly")}

    if(users){
      // dispatch(userStatus('TRUE'))
      dispatch(userStatus('TRUE',users[0]))
      console.log("success");
    }
    else{
      dispatch(userStatus('FALSE'))
      console.log("failed to login");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  );
};
    export default Login;
   