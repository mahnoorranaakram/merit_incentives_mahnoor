import React, { Component } from "react";
import {Row, Container,Card,Col,Button} from 'react-bootstrap';
import "./addListStyle.scss";

class AddList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
      userTitle:'',
      userText:''
    }
  this.handleTitle = this.handleTitle.bind(this);
  this.handleText = this.handleText.bind(this);

  }


  handleTitle(event) {
    this.setState({ userTitle: event.target.value });
  }
  handleText(event) {
    this.setState({ userText: event.target.value });
  }

  submitTodoList=()=>{
    const {addlisthandler}=this.props;
    let { userTitle ,userText}=this.state;
    let addDataForm={
      userTitle:userTitle,
      userText:userText
    }
    console.log('userTitle',addDataForm)
    addlisthandler(
      addDataForm
    );

  }
  addTodo =()=>{
    return(
      <Row >
      <Col  className="addlistmaincol">
        <form >
        <div className="form-group">
          <label htmlFor="example2">Title</label>
          <input type="text" 
           name="title"
           onChange={this.handleTitle}
           className="form-control form-control-md" 
           placeholder="Enter Title"/>
        </div>

        <div className="form-group">
          <label htmlFor="example2">Text</label>
          <input type="text" 
          name="text"
          onChange={this.handleText}
          className="form-control form-control-md" placeholder="Enter Text"/>
        </div>

        <div className="form-group" >
        <Button variant="secondary" onClick={()=> this.setState({showForm:false})}>Cancel</Button>
        <Button variant="primary" onClick={()=>this.submitTodoList()}>Submit</Button>
        </div>
        </form>
      </Col>
    </Row>
    )
  }

  showFormButton=()=>{
    return(
      <Row >
      <Col>
      <Button variant="primary" onClick={()=> this.setState({showForm:true})}>Add Todo List</Button>
      </Col>
    </Row>
    )
  }

  render() {
    const {showForm}=this.state;
    return (
    <Container className="addlistwrapper">
      {showForm === true ?
        this.addTodo()
        : 
        this.showFormButton()
      }
    </Container>

    );
  }
}

export default (AddList);

