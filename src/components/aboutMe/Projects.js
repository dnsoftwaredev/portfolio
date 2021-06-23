import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ClosasbleAlert from '../ClosableAlert';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    projects: {
        position: 'relative',
        height: '75vh',
        textAlign: 'center',
        alignItems: 'center',
    },
    project: {
        position: 'relative',
    }

}));

const Projects = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1500}>
            <Grid container spacing={4} className={classes.projects}>
                <Grid item xs={12} sm={6} className={classes.project} >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                            title="bored image"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Bored
                            </Typography>
                            <Typography>
                                A full-stack webapp that allows each user to generate and save a list of tasks to do
                            </Typography>
                            <Typography variant="subtitle1">
                                Python - Flask - HTML - CSS - SQLite
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} size="small" color="primary" href="https://boredcom.herokuapp.com/" color="inherit" target="_blank">
                                Check it out
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.project}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            title="redm image"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                REDM
                            </Typography>
                            <Typography>
                                A full-stack webapp that functions effectively like Reddit for real estate deal analyses
                            </Typography>
                            <Typography variant="subtitle1">
                                MongoDB Atlas - JavaScript - Express - NodeJS
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button component={Link} size="small" color="primary" href="https://realestatedm.herokuapp.com/properties" color="inherit" target="_blank">
                                Check it out
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} >
                    <ClosasbleAlert />
                </Grid>

            </Grid>
        </Fade>
    );
};

export default Projects;;