import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://images.unsplash.com/photo-1520548568350-fab9b9ebc923?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainContent: {
        position: 'relative',
        width: '100vh',
        height: '80vh',
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    mainContentLineName: {
        marginBottom: theme.spacing(2),
        fontSize: 40,
        fontWeight: 400
    },
    mainContentLineTitle: {
        marginBottom: theme.spacing(2),
        fontSize: 30,
        fontWeight: 300
    },
    mainContentLineLanguages: {
        marginBottom: theme.spacing(2),
        fontSize: 20,
        fontWeight: 100
    }
}));

const Landing = (props) => {
    const classes = useStyles();

    return (
        <Fade in timeout={1500}>

            <Paper className={classes.main} >
                <div className={classes.overlay} />
                <Fade in timeout={1500}>
                    <Grid container spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '80vh' }}>
                        <Grid item className={classes.mainContent} xs={8}>
                            <Typography component="h1" variant="h2" color="inherit" className={classes.mainContentLineName}>
                                Danh Nguyen
                            </Typography>
                            <Typography component="h2" variant="h5" color="inherit" className={classes.mainContentLineTitle}>
                                Entrepreneur -
                                Software Engineer
                            </Typography>
                            <Typography component="h3" variant="caption" color="inherit" className={classes.mainContentLineLanguages} >
                                Python - Java - JS - NodeJS - React - Redux
                            </Typography>
                        </Grid>
                    </Grid>
                </Fade>
            </Paper>
        </Fade>
    );
};

export default Landing;;;;