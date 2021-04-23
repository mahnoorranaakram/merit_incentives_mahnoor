import React, { Component } from "react";
import {Row, Container,Card,Col} from 'react-bootstrap';
import AddList from "../../components/AddList/container"
import Listing from "../../components/Listing/container"
class MainPage extends Component {
  state = {
  }

  render() {
    return (
        <Container fluid>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>

          <Col > <AddList/></Col>
          <Col > <Listing/></Col>
          </Col>
          <Col xs={6} md={4}></Col>

  
        </Row>
      </Container>
    );
  }
}

export default (MainPage);

