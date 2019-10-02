import React from "react";
import {
    Container,
    Row,
    Col,
    Media
} from 'reactstrap';
import Picture from "../images/myPic.jpg";

const imgstyle = {
    height: "300px",
    width: "200px"
}

function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h1>About Me</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <Media 
                                style={imgstyle}
                                src={Picture}
                                alt="picture pf Tim Sherman"
                                />
                            </Col>
                            <Col xs="9">
                                <p>Paragraph</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;