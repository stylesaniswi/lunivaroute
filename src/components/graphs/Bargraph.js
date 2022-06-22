import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const Bargraph = () => {
  const [data, setData] = useState([]);
  const value = require('./demoval.json').BarData;

  useEffect(() => {
    setData(value);
  }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
 
  console.log("dataaa",data);

  const config = {
    data,
    isGroup: true,
    xField: 'Day',
    yField: 'numberOfV',
    seriesField: 'name',
    // 分组柱状图 组内柱子间的间距 (像素级别)
    dodgePadding: 2,
    label: {
      position: 'middle',
      // 'top', 'middle', 'bottom'
      layout: [
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return <Column {...config} />;
};

export default Bargraph;