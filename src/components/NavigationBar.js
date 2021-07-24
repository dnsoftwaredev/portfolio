import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    noDecoration: {
        textDecoration: 'none',
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        marginLeft: 30,
        marginRight: 30
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    gridLink: {

    },
    gridTitle: {
        textAlign: 'center'
    },
    gridInfo: {
        textAlign: 'right'
    },
    gridInfoContent: {
        fontSize: 12,
    }

}));

export default function NavigationBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Fade in timeout={1500}>

                <Toolbar className={classes.toolbar}>
                    <Grid container
                        spacing={0}
                        alignItems="center"
                        style={{ minHeight: '5vh' }}>

                        <Grid item xs={3}>
                            <Grid container direction="row" spacing={3} alignItems="center">
                                <Grid item>
                                    <Link display="block" variant="body2" color="inherit" href="https://www.linkedin.com/in/danh-nguyen-sf/" className={classes.noDecoration} target="_blank">
                                        <LinkedInIcon fontSize="large" />
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link display="block" variant="body2" color="inherit" href="https://github.com/dnsoftwaredev" className={classes.noDecoration} target="_blank">
                                        <GitHubIcon />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={6} className={classes.gridTitle}>
                            <Typography
                                component={RouterLink}
                                to="/who"
                                variant="h4"
                                color="inherit"
                                className={classes.noDecoration}
                            >
                                Danh Nguyen
                            </Typography>
                        </Grid>

                        <Grid item xs={3} className={classes.gridInfo}>
                            <Typography component="h2" variant="subtitle1" color="inherit" className={classes.gridInfoContent}>
                                San Antonio, TX
                            </Typography>
                            <Typography component="h2" variant="subtitle1" color="inherit" className={classes.gridInfoContent}>
                                303-999-9550
                            </Typography>
                        </Grid>
                    </Grid>

                </Toolbar>
            </Fade>

            <Zoom in timeout={1000}>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    <Button
                        component={RouterLink}
                        to="/who"
                        color="inherit"
                        size="small"
                        className={classes.toolbarLink}
                    >
                        Who Am I?
                    </Button>

                    <Button
                        component={RouterLink}
                        to="/workexperience"
                        color="inherit"
                        size="small"
                        className={classes.toolbarLink}
                    >
                        Work Experience
                    </Button>

                    <Button
                        component={RouterLink}
                        to="/projects"
                        color="inherit"
                        size="small"
                        className={classes.toolbarLink}
                    >
                        My Projects
                    </Button>

                </Toolbar>
            </Zoom>
        </React.Fragment>
    );
};