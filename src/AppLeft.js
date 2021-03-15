import { Card, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import './AppLeft.css';
import numeral from 'numeral';
import Line from './Line';
import { buildChartData } from './util';


function AppLeft({casesType, selectedCountry, allCountriesData }) {
    const [chartData, setChartData] = useState([]);
    const [apiResponseData, setApiResponseData] = useState([]);

    useEffect(() => {
        const fetchChartData = async () => {
            console.log("fetchChartData");
            selectedCountry === 'worldwide'? await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
                .then(response => response.json())
                .then(data => {
                    // console.log("data >>", data);
                    setChartData(buildChartData(data, selectedCountry, casesType))})
            : await fetch(`https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=120`)
            .then(response => response.json())
            .then(data => {
                console.log("not worldwide");
                console.log("data >>", data);
                setChartData(buildChartData(data, selectedCountry, casesType))})
        }
        fetchChartData()
    }, [selectedCountry, casesType])
    const sortData = (data) => {
        return [...data].sort((a,b) => b.cases - a.cases);
    }
    let tableData = sortData(allCountriesData);
    console.log(selectedCountry);
    return (
        <div className="appLeft">
            <Card>
                <CardContent>
                    <h3 className="appLeft__titleOne">Live Cases by Country</h3>
                    <div className="appLeft-container">
                        <table className="appLeft__table" style={{width: '100%'}}>
                            <tbody>
                                {
                                    tableData?.map((item) => (
                                        <tr key={item.country}>
                                            <td>{item.country}</td>
                                            <td>{numeral(item.cases).format('0,0')}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <h3 
                        className="appLeft__titleOne"
                        style={{'margin': '20px 0','textTransform': 'capitalize'}}
                    >{selectedCountry} daily {casesType}</h3>
                    <Line 
                        casesType={casesType}
                        lineData={chartData}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default AppLeft;
