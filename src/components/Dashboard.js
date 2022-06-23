import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import Bargraph from './graphs/Bargraph';
import Linegraph from './graphs/Linegraph';
import Piechart from './graphs/Piechart';
import "./dashboard.css";
import Bargraph2 from './graphs/Bargraph2';
import Login from './LoginUser/Login';


const Dashboard = () => {
  return(
  
  <div className="site-card-wrapper">
      
   
    <Row gutter={16}>
      <Col span={8}>
        <Card className='card1'  bordered={false} style={{background:'#333;'}}>
          <Piechart/>
        </Card>
      </Col>
      <Col span={8}>
        <Card className='card2' bordered={false}>
          <Bargraph2/>
        </Card>
      </Col>
      <Col span={8}>
        <Card  className='card3'  bordered={false}>
          <Linegraph />
        </Card>
      </Col>
      
    </Row>
  </div>
)};

export default Dashboard;
