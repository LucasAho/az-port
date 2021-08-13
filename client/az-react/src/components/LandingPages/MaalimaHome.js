import React, { Component } from "react";

import API from "../../utils/api";

import Navbar from '../Menus/Navbar';
import Footer from '../Menus/Footer';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class CompileMaalima extends Component {
    render() {
        return(
            <Container>
                <Navbar
                    main="Home"
                    second="Blog"
                />
                
                <Footer/>
            </Container>
        )
    }
}

export default CompileMaalima;