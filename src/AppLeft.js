import { Card, CardContent } from '@material-ui/core'
import React from 'react';
import './AppLeft.css';
import numeral from 'numeral';
import Line from './Line';


function AppLeft({ allCountriesData }) {
    const sortData = (data) => {
        return [...data].sort((a,b) => b.cases - a.cases);
    }
    let tableData = sortData(allCountriesData);
    // console.log(allCountriesData);
    // console.log(tableData);
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
                    <Line />
                </CardContent>
            </Card>
        </div>
    )
}

export default AppLeft;
