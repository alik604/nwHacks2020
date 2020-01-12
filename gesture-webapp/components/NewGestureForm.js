import React, { Component } from 'react'
import { Form, Input, Message, Button, Icon } from 'semantic-ui-react'
import { Router, Link } from '../routes'

class NewGestureForm extends Component {
    // Initialize the state object
    state = {
        value: '',
        errorMessage: '',
        loading: false,
        success: false
    }

    // Function to handle onSubmit for the form
    onSubmit = async (event) => {
        event.preventDefault()

        this.setState({ loading: true, errorMessage: '' })

        try {
            // Displays success message after creating a new gesture
            this.setState({ success: true})

            // Force a refresh of the current page. The new gesture page has a props object of gesture_id
            Router.replaceRoute(`/gestures/${this.props.gesture_id}`)

        } catch (err) {
            this.setState({ errorMessage: err.message })
        }

        this.setState({ loading: false, value: '' })
    }

    render() {
        return (
            <Form 
                onSubmit={this.onSubmit} 
                error={!!this.state.errorMessage}
                success={this.state.success}
            >
                <Form.Field>
                    <label>Enter a name for your gesture:</label>
                    <Input 
                        label="gesture" 
                        labelPosition="right"
                        value={this.state.value} 
                        onChange={event => this.setState({ value: event.target.value })} 
                    />
                </Form.Field>

                <Message
                        style={{ overflowWrap: 'break-word' }} 
                        success >
                        <Message.Content>
                            <Message.Header>Success</Message.Header>
                            Success message.
                        </Message.Content>
                </Message>  

                <Message
                        style={{ overflowWrap: 'break-word' }}  
                        error header="Something went wrong!" 
                        content={this.state.errorMessage} 
                />

                <Message icon
                        hidden={!this.state.loading}
                        style={{ overflowWrap: 'break-word' }} >
                        <Icon name='circle notched' loading />
                        <Message.Content>
                            <Message.Header>Creating a new gesture!</Message.Header>
                            Loading message.
                        </Message.Content>
                </Message>

                <Button primary loading={this.state.loading}>
                    Create
                </Button>
            </Form>
        )

    }
}

export default NewGestureForm;