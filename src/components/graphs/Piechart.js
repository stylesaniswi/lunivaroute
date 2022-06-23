import React from "react";
import ReactDOM from "react-dom";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement);

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/

const Piechart=()=> {
    
    const value = require('./demoval.json').Vehicles;
    
const data = {
      labels: ["Total", "Assigned", "Remaining"],
      datasets: [
        {
          data: [value.totalVehicle, value.assignedVehicle,(value.totalVehicle - value.assignedVehicle)],
          backgroundColor: [
            '#0E8E89',
          '#E19348',
          '#247FEA',
        ],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        
        }
      ],
     
      plugins: {
        labels: {
          render: "percentage",
          fontColor: ["green", "white", "red"],
          precision: 2
        },
      },
       text: "23%",
    };
    
    

    return (
      <div>
        <h2>React Doughnut with Text Example</h2>
        <Doughnut
          data={data}
          options={{
            
            // elements: {
              
            //   center: {
            //     legend: { display: true, position: "right" },
            //     text: "Red is 2/3 the total numbers",
            //     color: "#FF6384", // Default is #000000
            //     fontStyle: "Arial", // Default is Arial
            //     sidePadding: 20, // Default is 20 (as a percentage)
            //     minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
            //     lineHeight: 25 // Default is 25 (in px), used for when text wraps
            //   }
            // },
            
          }}
        />
      </div>
    );
  }


export default Piechart;
