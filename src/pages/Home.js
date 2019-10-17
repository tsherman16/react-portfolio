import React from "react";
import {
    Container,
    Row,
    Col,
    Media
} from 'reactstrap';
import MyPic from "../images/myPic.jpg";

const myPicStyle = {
    height: "300px",
    width: "200px"
}

function Home() {
    return (
        <div>
            <Container className= "border border-dark" 
            style={{marginTop: "70px", padding: "30px", backgroundColor: "white"}}>
                <Row>
                    <Col>
                        <Row style={{marginBottom: "20px"}}>
                            <Col>
                                <h1>About Me</h1>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <Media
                                    style={myPicStyle}
                                    src={MyPic}
                                    alt="picture pf Tim Sherman"
                                />
                            </Col>
                            <Col xs="9">
                                <p id="aboutMe-body"> I was born in Portland, Oregon, but have lived in Arizona for practically my whole life. I
                                graduated from the University of Arizona with a degree in Marketing. I met my wife in college and am now married for about two years. During my free time I like to watch sports or stay active. The activities I do to stay active are the
                                gym, soccer, basketball, swimming, hiking, and walking my dog. My dog's name is Jax and he is a 3 year old Golden Retriever. Unlike my wife and I he is not active and prefers to lay around and get a lot of belly rubs and play tug of war.</p>

                                <p id="aboutMe-body">I love watching movies, especially at the theater. My favorite types of movies are comedy,action, thriller, and drama. I hate horror movies and will refuse to go to them, this also includes going to haunted houses. I don't play as many video games as I used to, but when I do I play sports games like Madden, NBA2K, and FIFA. I'm a basic millenial and love brunch, especially at OHSO. My favorite foods are chicken and waffles or pretty much any mexican food.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;