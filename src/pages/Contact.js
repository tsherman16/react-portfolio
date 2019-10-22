import React from 'react';
import { 
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Container,
    Row } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col style={{marginTop: "180px", marginBottom: "180px"}}>
                        <Form>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="employerEmail" placeholder="exampleEmail@email.com" />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label for="examplePassword" sm={2}>Email Title</Label>
                                <Col sm={10}>
                                    <Input type="text" name="headingText" id="headingText" placeholder="Employment Opportunity" />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label for="exampleText" sm={2}>Text Area</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}