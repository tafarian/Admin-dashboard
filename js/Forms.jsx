import React from "react";

// import bootstrap forms
import { FormGroup, FormControl, ControlLabel, Form, Button } from 'react-bootstrap';

class Forms extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    
    render() {
        return (
            <div className="col-sm-9">
            <div className="container">
                <div className="row">
                    <h3 className="text">Forms</h3>
                </div>
                <div className="row bordero">
                    <div className="container mainbox">
                        <Form>
                            <FormGroup controlId="formInlineName">
                                <ControlLabel>Name</ControlLabel>{' '}
                                <FormControl type="text" placeholder="Jane Doe" />
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineEmail">
                                <ControlLabel>Email</ControlLabel>{' '}
                                <FormControl type="email" placeholder="jane.doe@example.com" />
                            </FormGroup>{' '}
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Textarea</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="textarea" />
                            </FormGroup>
                        <Button type="submit">Send invitation</Button>
                        </Form>
                    </div>
                </div>
            </div>  
        </div>
        )
    }
}

export default Forms;