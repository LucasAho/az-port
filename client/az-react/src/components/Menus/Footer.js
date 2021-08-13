import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        justifyContent: 'center'
    },
    copyright: {
        alignSelf: "center"
    }
}));

export default function Footer() {
const classes = useStyles();

return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.appbar}>
                <IconButton
                    aria-label="Instagram"
                    color="inherit"
                >
                    <InstagramIcon/>
                </IconButton>
                <IconButton
                    aria-label="LinkedIn"
                    color="inherit"
                >
                    <LinkedInIcon/>
                </IconButton>
                <IconButton
                    aria-label="Github"
                    color="inherit"
                >
                    <GitHubIcon/>
                </IconButton>
                <IconButton
                    aria-label="Contact Me"
                    color="inherit"
                >
                    <EmailIcon/>
                </IconButton>
            </Toolbar>
            <Typography className={classes.copyright}>
                Copyright©
            </Typography>
        </AppBar>
    </div>
);
}