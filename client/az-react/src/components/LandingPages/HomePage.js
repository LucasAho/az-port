import React, { Component } from "react";

import API from "../../utils/api";

import Navbar from '../Menus/Navbar';
import Footer from '../Menus/Footer';

import HomePageSection from '../HomeComponents/HomePageSection';
import RecentPosts from '../HomeComponents/RecentPosts';
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
                        <RecentPosts/>
                    </Grid>
                </Grid>
                <HomePageSection
                    title="Hiking"
                    color="purple"
                />
                <HomePageSection
                    title="Poetry"
                    color={null}
                />
                <HomePageSection
                    title="Essays"
                    color="purple"
                />
                <HomePageSection
                    title="Short Stories"
                    color={null}
                />
                <Footer/>
            </Container>
        )
    }
}

export default CompileHome;