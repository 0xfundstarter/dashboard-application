import { creatorsArea } from "@/data/creatorsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProject from "./SingleProject";

const { creators } = creatorsArea;

const ExploreArea = () => {
    return (
        <section className="explore-area pt-90 pb-120">
            <Container>
                <Row className="justify-content-center">
                    {creators.map((creator) => (
                        <Col lg={4} md={6} sm={7} key={creator.id}>
                            <SingleProject creator={creator} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ExploreArea;
