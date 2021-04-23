import React, { Component } from "react";
import {Row, Container,Card,Col,Button, Table} from 'react-bootstrap';
import "./ListingStyle.scss";
class Listing extends Component {
  state = {
  }

  render() {
    const {listTableData,getTableData,deleteListhandler,editListhandler}=this.props;
    return (
    <Container className="listcontainerwrapper">
      <Row >
        <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Text</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getTableData.length !== 0?
            getTableData.map((item,index)=>(
              <tr key={index}>
                <td>{index}</td>
                <td>{item.userTitle}</td>
                <td>{item.userText}</td>
                <td> <Button variant="primary" onClick={()=> editListhandler(index)}>Edit</Button></td>
                <td> <Button variant="danger" onClick={()=> deleteListhandler(index)}>Delete</Button></td>
                </tr>
            ))
            :
          listTableData
              ? listTableData.map((item, index) => (
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.text}</td>
                <td> <Button variant="primary" onClick={()=> editListhandler(index)}>Edit</Button></td>
                <td> <Button variant="danger" onClick={()=> deleteListhandler(index)}>Delete</Button></td>
              </tr>
                ))
              : ""}
           
          </tbody>
        </Table>
        </Col>
        
      </Row>
    </Container>
    );
  }
}

export default (Listing);

