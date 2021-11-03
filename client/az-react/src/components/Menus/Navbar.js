import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}));

export default function Navbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h4" noWrap>
                        Creative Spectrum
                    </Typography>
                    <IconButton
                        aria-label="Blog Nav"
                        aria-controls="blogMenu-appbar"
                        color="inherit"
                    >
                        <Typography className={classes.title} variant="h6" noWrap>
                            {props.main}
                        </Typography>
                    </IconButton>
                    <IconButton
                        aria-label="Maalima Nav"
                        aria-controls="wbMenu-appbar"
                        color="inherit"
                    >
                        <Typography className={classes.title} variant="h6" noWrap>
                            Portfolio
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}