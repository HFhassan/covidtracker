import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './card.module.css';

function Cards (props){
    console.log(props);
    return (
        <div className= {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >Real Data</Typography>
                        <Typography color="textSecondary" >Real Date</Typography>
                        <Typography variant="body2" > Numer of active cases of covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >Real Data</Typography>
                        <Typography color="textSecondary" >Real Date</Typography>
                        <Typography variant="body2" > Numer of active cases of covid 19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >Real Data</Typography>
                        <Typography color="textSecondary" >Real Date</Typography>
                        <Typography variant="body2" > Numer of active cases of covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;