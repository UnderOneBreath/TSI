import React, { Component } from "react";
import { Helmet } from "react-helmet";

const Contacts = () =>{
    return (
        <>
            <Helmet>
                <title>Contacts</title>
                <meta name = "description" content="Contact page"/>
                <meta name="keyword" content="social, contacts, phone" />
            </Helmet>
            <p>Our's Contacts</p>
    </>
);
}
 
export default Contacts;