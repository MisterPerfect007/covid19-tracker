import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import './InfoBox.css';
import numeral from 'numeral';

function InfoBox({casesType, setCasesType, title, total, todayTotal }) {
    return (
        <div className={`${casesType === title.toLowerCase()? `${title}-border` : ''} infoBox`} onClick={setCasesType}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary">{title}</Typography>
                    <Typography 
                        variant ="h4"
                        className={`${title}-color`}
                    >{numeral(todayTotal).format('+0 a')}</Typography>
                    <Typography variant ="h6" color="textSecondary">{numeral(total).format('+0 a')} Total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox;
