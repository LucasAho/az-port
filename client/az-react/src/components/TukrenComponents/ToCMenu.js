import React from 'react';

import Scroll from "react-scroll";

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: { width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ToCMenu() {
    const classes = useStyles();

    const scroller = Scroll.scroller;

    const handleScroll = id => {
        scroller.scrollTo(id, {
            duration: 100,
            smooth: true
        })
    }

    return (
        <div className={classes.root}>
            <List component="nav" >
                <Typography variant="h6">
                    Table of Contents
                </Typography>
                <Divider />
                <ListItem button onClick={() => handleScroll('tukIntro')}>
                    <ListItemText primary="Introduction" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('tukPhon')}>
                    <ListItemText primary="Phonology" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('tukSyntax')}>
                    <ListItemText primary="Syntax" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('tukMorph')}>
                    <ListItemText primary="Morphology" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('tukNum')}>
                    <ListItemText primary="Numbers" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('tukOrth')}>
                    <ListItemText primary="Orthography" />
                </ListItem>
                <ListItem button onClick={() => handleScroll('tukDict')}>
                    <ListItemText primary="Dictionary" />
                </ListItem>
            </List>
        </div>
    );
}