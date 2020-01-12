import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { Grid } from 'semantic-ui-react'
import { Link } from '../../routes'
import NewGestureForm from '../../components/NewGestureForm'
import WebcamCapture from "../../components/WebcamCapture";

class New extends Component {
    // Queries our database for gestures
    static async getInitialProps(props) {

        return {
            gestures: [0]
        };
    }

    // Need to define a render method to display
    render() {
        return (
                <Layout>
                    <h3>Create a New Gesture</h3>
                    
                    <Grid divided='vertically'>
                        <Grid.Row>
                            <Grid.Column>
                                <WebcamCapture/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <NewGestureForm/>
                            </Grid.Column>
                        </Grid.Row>


                    </Grid>
               </Layout>
        )
               
    }
}

export default New;