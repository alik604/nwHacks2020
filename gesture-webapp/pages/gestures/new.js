import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { Card, Button } from 'semantic-ui-react'
import { Link } from '../../routes'
import NewGestureForm from '../../components/NewGestureForm'
import WebcamCapture from "react-webcam";

class New extends Component {
    // Queries our database for gestures
    static async getInitialProps(props) {

        return {
            gestures: [0]
        };
    }

    // Need to define a render method to display
    render() {
        return <Layout>
                    <h3>Create a New Gesture</h3>
                    <NewGestureForm/>
                    <WebcamCapture/>
               </Layout>

               
    }
}

export default New;