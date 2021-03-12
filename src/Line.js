import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['22/03/2020', '23/03/2020', '24/03/2020', '25/03/2020', '26/03/2020', '27/03/2020'],
    datasets: [
      {
        label: 'none',
        // fill: false,
        lineTension: 0.3,
        backgroundColor: 'rgba(220,192,192,0.4)',
        borderColor: 'rgba(220,19,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{
            x: 10,
            y: 20
        }, {
            x: 15,
            y: 10
        },
        {
            x: 20,
            y: 30
        },
        {
            x: 25,
            y: 40
        },
        {
            x: 35,
            y: 10
        },
        {
            x: 40,
            y: 30
        },
        {
            x: 45,
            y: 40
        },
        {
            x: 50,
            y: 30
        },
        {
            x: 55,
            y: 20
        },
        {
            x: 65,
            y: 10
        }
    ]
      }
    ]
  };
function LineGraph() {
    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default LineGraph;
