import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
// import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const details = ({title}) => {
    const classes = useStyles();
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography varient="h5"> ₹100 </Typography>
                {/* <Doughnut data = "DATA"/> */}
            </CardContent>
        </Card>
    )
}

export default details
