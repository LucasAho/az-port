import React, { Component } from "react";

import API from "../../utils/api";

import Navbar from '../Menus/Navbar';
import Footer from '../Menus/Footer';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class TukrenDocs extends Component {
    render() {
        return(
            <Container>
                <Navbar
                    main="Home"
                    second="Blog"
                />
                <Grid container>
                    <Grid sm={10}>
                        <Typography align="center" variant="h3">
                            Voice of Stone - a Guide for Proto-Tukren
                        </Typography>
                        <Typography variant="p">
                            Tukren, tongue of stone, is a fictional, naturalistic constructed language designed for the Rohīren people of the planet Maalima. This is the first of my constructed languages and is currently the most developed. 
                            The dialect of Tukren spoken by the ethnic Hībord in my novels will be an offshoot of this language, developed in the blending of proto-Tukren and the language of the neighboring Hanatu people. 
                        </Typography>
                    </Grid>
                    <Grid sm={2}>

                    </Grid>
                </Grid>
                
                <Footer/>
            </Container>
        )
    }
}

export default TukrenDocs;