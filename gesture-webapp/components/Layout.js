import React from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from './Navbar'
import Head from 'next/head';

// Layout for a standard page
export default props => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>

            <Navbar />

            {props.children}
        </Container>
    );
}