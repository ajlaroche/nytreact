import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import "../Home/Articles.css";
import Card from "../../components/Card";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>
       <Card header="Saved Articles">
          <Container fluid>
            <ul className="list-group list-group-flush">
              {/* Wrap this li component in map function for each article found and pass the article ids to save button */}
              <li className="list-group-item">Cras justo odio <DeleteBtn/></li>
            </ul>
          </Container>
        </Card>
      </Container>
    );
  }
}

export default Saved;
