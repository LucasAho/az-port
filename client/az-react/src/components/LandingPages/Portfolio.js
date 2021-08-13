import React, { Component } from "react";

import API from "../../utils/api";

import PortfolioNav from '../Menus/PortfolioNav';
import Footer from '../Menus/Footer';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class CompilePortfolio extends Component {
    render() {
        return(
            <Container>
                <PortfolioNav/>
                <Footer/>
            </Container>
        )
    }
}

export default CompilePortfolio;