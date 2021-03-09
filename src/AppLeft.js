import { Card, CardContent } from '@material-ui/core'
import React, { useState } from 'react';
import './AppLeft.css'

function AppLeft({ allCountryData }) {
    const sortData = (data) => {
        return [...data].sort((a,b) => b.cases - a.cases);
    }
    let tableData = sortData(allCountryData);
    // console.log(allCountryData);
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
                                            <td>{item.cases}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AppLeft;
