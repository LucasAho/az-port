import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
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
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function PortfolioNav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Grid container justifyContent="center">
                    <Grid item justifyContent="flex-start">
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Grid container direction='column' justifyContent="center">
                            <Grid item sm={12}>
                                <Typography align='center' className={classes.title} variant="h3" noWrap>
                                    Lucas Asher
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography align='center' variant="h6" noWrap>
                                    Author, mountaineer, and web developer
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    );
}