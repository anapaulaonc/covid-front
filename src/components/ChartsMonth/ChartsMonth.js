import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Line } from 'react-chartjs-2';


const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

const  ChartsMonth = ({initials}) => {

  const [datas, setData] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:3000/by_months/search/${initials}`)
      .then(res =>{
        setData(res.data);  
        console.log(res.data)
  
      }).catch(error => {console.log(error)})
  },[initials])
    
    return (
      <div className="ChartsMonth">
        <Line width="600px" height="300px" data={{
        labels: datas.map(element => element.datetime),
        datasets: [
            {
                label: 'Numero de Casos',
                data: datas.map(element => element.cases),
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: "y-axis-1",
            },
            {
                label: 'Numero de Mortos',
                data: datas.map(element => element.deaths),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: "y-axis-2",
            },
        ],
        }} options={options} />   

            
      </div>
    )

}

export default ChartsMonth;