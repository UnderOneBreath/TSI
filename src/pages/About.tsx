import React, { Component } from "react";
import { Helmet } from "react-helmet";

const About = () => {
        return (
        <>
                <Helmet>
                        <title>About</title>
                        <meta name="description" content="About us page"/>
                        <meta name = "keyword" content="about, us, who"/>
                </Helmet>
                <p>
                About us
                </p>
        </>
        );
}
 
export default About;