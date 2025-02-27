import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';


import CountUp from 'react-countup';
import styles from './card.module.css';
import cx from 'classnames';


function Cards ({data:{ confirmed, recovered, deaths, lastUpdate}}){
    if (!confirmed)
    {
        return 'loading....';
    }
    return (
        <div className= {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx (styles.container, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5" >
                            <CountUp 
                                start ={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                                />
                            
                            </Typography>
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" > Number of active cases of covid 19</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5" >
                            <CountUp 
                            start ={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                            />
                            </Typography>
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" > Number of recovered from covid 19</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5" >
                            
                            <CountUp 
                                start ={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                                />
                                </Typography>
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2" > Number deaths from covid 19</Typography>
                        </CardContent>
                    </Grid>
            </Grid>
        </div>
    )
}

export default Cards;