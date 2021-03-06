import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 200,
    },
});

const WorkExperience = (props) => {
    const classes = useStyles();

    return (
        <Grow in timeout={1500}>

            <Grid container spacing={4}>
                <Grid item xs={12} >
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h4">
                                        Freelance Web Developer
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        DBA Danh Nguyen
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        - Design and maintain responsive websites for clients using HTML, JavaScript, ReactJS and other technologies
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        - Seamless integration with various databases included but not limited to MySQL, PostgreSQL…
                                    </Typography>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' title='computer' />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>

                <Hidden xsDown >
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Hidden>

                <Grid item xs={12} >
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image='https://images.unsplash.com/photo-1575468130797-aa950b68aeec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' title='bacteria' />
                            </Hidden>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h4">
                                        Researcher
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        Anushree Chatterjee Lab
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        - Designed and implemented a database that linked various conditions to effects on gene expression of E. Coli
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        - Developed initial research, designed the database, and maintained the database for the group.
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>

                <Hidden xsDown >
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                </Hidden>


                <Grid item xs={12} >
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component="h2" variant="h4">
                                        Owner Operator - Real Estate
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        DNCT LLC
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        - Investing in residential and commercial properties in Colorado and Texas
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        - Repositioning distressed residential and commercial properties
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        - Involving in all aspects of real estate investing from acquisition, loan processing, loan servicing, to general managing of various residential properties and a Wyndham hotel in AAA area
                                    </Typography>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia className={classes.cardMedia} image='https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' title='picture' />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>

            </Grid>
        </Grow>

    );
};

export default WorkExperience;