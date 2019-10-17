import React from "react";
import { Row, Col } from "reactstrap";


function Footer() {
    return (
        <div>
            <Row className="text-center py-1 fixed-bottom" style={{ background: "black" }}>
                <Col>
                    <p style={{ marginTop: "8px", color: "white" }}>
                        Github:
                            <a
                            href="https://github.com/hunterrickert/crypto-currency-mining"
                            target="blank"
                            style={{ color: "white", marginLeft: "10px" }}>
                            <i className="fab fa-github"> </i>
                            </a>
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;