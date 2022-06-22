import { Card, Col, Row } from 'antd';
import React from 'react';
import Bargraph from './graphs/Bargraph';
import Linegraph from './graphs/Linegraph';
import Piechart from './graphs/Piechart';
import "./dashboard.css";

const Dashboard = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card className='card1'  bordered={false} style={{background:'#333;'}}>
          <Piechart/>
        </Card>
      </Col>
      <Col span={8}>
        <Card className='card2' bordered={false}>
          <Bargraph />
        </Card>
      </Col>
      <Col span={8}>
        <Card  className='card3'  bordered={false}>
          <Linegraph />
        </Card>
      </Col>
      
    </Row>
  </div>
);

export default Dashboard;
