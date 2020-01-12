import React, { Component } from 'react'
import Webcam from "react-webcam";
import { Button, Form, Message, Icon, Progress } from 'semantic-ui-react'

class WebcamCapture extends Component {
    
    // Initialize the state object
    state = {
      value: '',
      errorMessage: '',
      loading: false,
      success: false,
      images: [],
      counter: 0
    }

    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = async () => {
      event.preventDefault()

      this.setState({ loading: true, errorMessage: '', success: false })

      try {
        // Set to capture 50 images
        for (let i = 0; i < 50; i++) {
          const imageSrc = this.webcam.getScreenshot();
          this.state.images.push(imageSrc);

          // 250 ms pause between screen captures
          let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 250)
          });
        
          await promise;
        }

        this.setState({ success: true })
      } catch (err) {
        console.log(err);
      }

      this.setState({ loading: false });
      console.log(this.state.images);
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <Form
          onSubmit={this.capture}
          error={!!this.state.errorMessage}
          success={this.state.success}>

          <Form.Field>
            <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                screenshotQuality={1}
                width={350}
                videoConstraints={videoConstraints}
            />
          </Form.Field>

          <Message
            style={{ width: '40vw', overflowWrap: 'break-word' }} 
            success>
              <Message.Content>
                <Message.Header>Success!</Message.Header>
                  <p>Your hand gestures have been successfully captured.</p>
                </Message.Content>
          </Message>  

          <Message
            style={{ width: '40vw', overflowWrap: 'break-word' }}  
            error header="Something went wrong!" 
            content={this.state.errorMessage} 
          />

          <Message icon
              hidden={!this.state.loading}
              style={{ width: '40vw', overflowWrap: 'break-word' }} >
              <Icon name='circle notched' loading />
                  <Message.Content>
                    <Message.Header>Capturing Gestures</Message.Header>
                      <p>Capturing sample images of your hand gesture. 
                      Please keep the hand gesture centered on the screen until this process is finished.</p>
                      
                      <Progress percent={100} active>
                      </Progress>
                  </Message.Content>
          </Message>

          <Form.Field>
            <Button
              loading={this.state.loading} 
              onClick={this.capture}
              primary
            >
                Capture Gesture
            </Button>
          </Form.Field>

          <Form.Field>
            {this.state.images[0] ? <img src={`${this.state.images[0]}`}/>: ''}
          </Form.Field>
          
        </Form>
      );
    }
  }

export default WebcamCapture;