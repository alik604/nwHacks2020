import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import { Link } from '../../routes'

class ActiveGestures extends Component {
    // Required to be static by Next.js
    static async getInitialProps() {

        return { 
            active_gestures: [0, 1, 2, 3]
        };
    }

    // Card for different gestures
    renderActiveGestures() {
        // For every gesture, return a card with its information
        const items = this.props.active_gestures.map( gesture => {
            
            return {
                header: "Gesture Title",
                meta: "Description",
                description: (
                    
                    // Wildcard address is used in route.js
                    <Link route={`/gestures/${gesture}`}>
                        <a>View Gesture</a>
                    </Link>
                ),
                fluid: true,
                extra: (
                    <Button floated="left" 
                            content="Deactivate" 
                            icon="minus circle" 
                            color="red"
                            labelPosition="left" />
                )
            }
        });

        // Displays a group of all gestures
        return <Card.Group 
                    items={items} 
                    style={{ width: '40vw', overflowWrap: 'break-word' }}  
                />;
    }

    // Need to define a render method to display
    render() {
        return <Layout>
                    <h3>Active Gestures</h3>

                    {this.renderActiveGestures()}
               </Layout>
    }
}

export default ActiveGestures;