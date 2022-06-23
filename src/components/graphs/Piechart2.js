import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';


const Piechart = () => {
    const value = require('./demoval.json').Vehicles;
  const data = [
    {
      type: 'Total',
      value: value.totalVehicle,
    },
    {
      type: 'Assigned',
      value: value.assignedVehicle,
    },
    {
      type: 'Remaining',
      value: (value.totalVehicle - value.assignedVehicle),
    },
    
  ];
  console.log(value);
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize:14,
        },
        content: 'Vehicle Status',
      },
    },
    legend: {
        layout: 'horizontal',
        position: 'bottom'
      },
    theme: {
        colors10: [
          '#0E8E89',
          '#E19348',
          '#247FEA',
        ]}
  };
  return <Pie {...config} />;
};
 
export default Piechart;