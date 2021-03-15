import numeral from 'numeral';
import React from 'react';
import {Line} from 'react-chartjs-2';


function LineGraph({casesType = 'cases', lineData}) {
    let backgroundColor;
    let borderColor;
    switch (casesType) {
        case 'cases':
            backgroundColor = 'rgba(255, 187, 0, 0.4)';
            borderColor = 'rgb(255, 187, 0)'
            break;
        case 'deaths':
            backgroundColor = 'rgba(255, 0, 0, 0.3)';
            borderColor = 'rgb(255, 0, 0)'
            break;
        case 'recovered':
            backgroundColor = 'rgba(9, 255, 0, 0.2)';
            borderColor = 'rgb(9, 255, 0)'
            break;
        default:
            break;
    }
    const data = {
        datasets: [
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            pointRadius: 1,
            data: lineData
          }
        ]
    };
      const options = {
        legend: {
            display: false
        },
        element: {
            point: {
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    format: 'MM/DD/YYYY',
                    // tooltipFormat: 'll',
                    unit: 'month',
                    displayFormats: {
                        month:  'MMM YYYY'
                    }
                    

                },
                bounds: 'data',
                distribution: 'linear'
    
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    callback: function(value, index, values) {
                        if(index%2 === 0)
                        return numeral(value).format('+0 a');
                        
                    }
                },

            }]
        },
        tooltips:{
            callbacks: {
                label: function(tooltipItem, data) {
                    return numeral(tooltipItem.value).format('+0,0')
                }
            }
        }
        
    }
    return (
        <div>
            <Line 
                data={data} 
                options={options}
            />
        </div>
    )
}

export default LineGraph;
