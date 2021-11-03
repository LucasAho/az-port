import React, { Component } from "react";

import API from "../../utils/api";

import Navbar from '../Menus/Navbar';
import Footer from '../Menus/Footer';
import ToCMenu from "../TukrenComponents/ToCMenu";
import PhonologyTables from "../TukrenComponents/PhonologyTables";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

import { Element } from "react-scroll";
import DictionaryTable from "../TukrenComponents/DictionaryTable";

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
                        <Typography align="center" variant="h2">
                            Voice of Stone - a Guide for Proto-Tukren
                        </Typography>
                        <Divider/>
                        <Element id='tukIntro' name='tukIntro'>
                            <Typography align="center" variant="h3">
                                Introduction
                            </Typography>
                        </Element>
                        <Element id='tukPhon' name='tukPhon'>
                            <Typography align="center" variant="h3">
                                Phonology
                            </Typography>
                        </Element>
                        <PhonologyTables/>
                        <Element id='tukSyntax' name='tukSyntax'>
                            <Typography align="center" variant="h3">
                                Syntax
                            </Typography>
                        </Element>
                        <Element id='tukMorph' name='tukMorph'>
                            <Typography align="center" variant="h3">
                                Morphology
                            </Typography>
                        </Element>
                        <Element id='tukNum' name='tukNum'>
                            <Typography align="center" variant="h3">
                                Numbers
                            </Typography>
                        </Element>
                        <Element id='tukOrth' name='tukOrth'>
                            <Typography align="center" variant="h3">
                                Orthography
                            </Typography>
                        </Element>
                        <Element id='tukDict' name='tukDict'>
                            <Typography align="center" variant="h3">
                                Dictionary
                            </Typography>
                            <DictionaryTable/>
                        </Element>
                    </Grid>
                    <Grid sm={2}>
                        <ToCMenu/>
                    </Grid>
                </Grid>
                
                <Footer/>
            </Container>
        )
    }
}

export default TukrenDocs;