import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Articles.css"
import Card from "../../components/Card";

class Articles extends Component {
  state = {
    articles: []
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1><u>New York Times Article Scrubber</u></h1>
          <h3>Search for and Annotate Articles of Interest</h3>
        </Jumbotron>
        <Card header="Search">
          <Container fluid>
            <form>
              <label>Title</label>
              <Input name="title" placeholder="Title (required)" />
              <label>Start Year</label>
              <Input name="startYear" placeholder="Start Year (required)" />
              <label>End Year</label>
              <Input name="endYear" placeholder="End Year (required)" />
              <FormBtn>Search</FormBtn>
            </form>
          </Container>
        </Card>
        <Card header="Results">
          <Container fluid>
            <ul className="list-group list-group-flush">
              {/* Wrap this li component in map function for each article found and pass the article ids to save button */}
              <li className="list-group-item">Cras justo odio <SaveBtn> Save </SaveBtn></li>
            </ul>
          </Container>
        </Card>
      </Container>
    );
  }
}

export default Articles;
