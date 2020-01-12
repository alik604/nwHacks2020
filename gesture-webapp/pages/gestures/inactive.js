import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import { Link } from '../../routes'

class InactiveGestures extends Component {
    // Required to be static by Next.js
    static async getInitialProps() {

        return { 
            inactive_gestures: [0, 1, 2, 3]
        };
    }

    // Card for different gestures
    renderInactiveGestures() {
        // For every gesture, return a card with its information
        const items = this.props.inactive_gestures.map( gesture => {
            
            return {
                header: "Gesture Title",
                meta: "Description",
                description: (
                    
                    // Wildcard address is used in route.js
                    <Link route={`/gestures/${gesture}`}>
                        <a>View Details</a>
                    </Link>
                ),
                fluid: true,
                extra: (
                    <Button floated="left" 
                            content="Activate" 
                            icon="add circle" 
                            color="green"
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
                    <h3>Inactive Gestures</h3>

                    {this.renderInactiveGestures()}
               </Layout>
    }
}

export default InactiveGestures;