import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import './InfoBox.css';

function InfoBox({ title }) {
    return (
        <div className="infoBox">
            <Card>
                <CardContent>
                    <Typography color="textSecondary">{title}</Typography>
                    <Typography variant ="h4">+12.8k</Typography>
                    <Typography variant ="h6" color="textSecondary">+12.8 m total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox;
