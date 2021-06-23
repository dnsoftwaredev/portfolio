import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';

export default function TransitionAlerts() {
    const [open, setOpen] = React.useState(true);

    return (
            <Fade in={open}>
                <Alert variant="outlined" severity="info"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Please be patient with my apps. They take sometimes to load due to Heroku server!
                </Alert>
            </Fade>
    );
}