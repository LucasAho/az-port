import React, { Component } from "react";

import API from "../../utils/api";

import Navbar from '../Menus/Navbar';
import Footer from '../Menus/Footer';

import HomePageSection from '../HomeComponents/HomePageSection';
import OldFeaturedPosts from '../HomeComponents/OldFeaturedPosts';
import FeaturedPost from "../HomeComponents/FeaturedPost";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class CompileHome extends Component {
    render() {
        return(
            <Container>
                <Navbar
                    main="Home"
                    second="Maalima"
                />
                <Grid container>
                    <Grid item sm={8}>
                        <FeaturedPost/>
                    </Grid>
                    <Grid item sm={4}>
                        <OldFeaturedPosts/>
                    </Grid>
                    <HomePageSection
                        title = "Recent Wiki Articles"
                        color = "purple"
                    />
                    <HomePageSection
                        title = "Recent Blog Posts"
                        color = { null }
                    />
                </Grid>
                <Footer/>
            </Container>
        )
    }
}

export default CompileHome;