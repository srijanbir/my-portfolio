import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Particle from './Particle';

const Blogs = () => {
    return (
        <Container fluid className="blogs-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "200px",
                            height: "650px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            <strong className="green">Coming Soon...</strong>
                        </h1>

                    </Col>

                </Row>



            </Container>
        </Container>
    );
};

export default Blogs;