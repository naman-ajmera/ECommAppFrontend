import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FormContainer({ children }: any) {
  return (
    <Container>
      <Row className="py-3 justify-content-md-center">
        <Col xs={12} md={8}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
