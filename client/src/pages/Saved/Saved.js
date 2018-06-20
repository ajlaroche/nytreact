import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Container } from "../../components/Grid";
import "../Home/Articles.css";
import Card from "../../components/Card";
import { TextArea } from "../../components/Form";

class Saved extends Component {
  state = {
    savedArticles: []
  };

 
  componentDidMount() {
    this.loadArticles();
      };

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ savedArticles: res.data }))
      .catch(err => console.log(err));
  };

  removeArticle = (id) => {
    console.log(id);
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Card header="Saved Articles">
          <Container fluid>
            <ul className="list-group">

              {this.state.savedArticles.map((savedArticles) => (
                <li className="list-group-item saved" key={savedArticles._id}><a href={savedArticles.url}>{savedArticles.headline}</a> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date saved: {savedArticles.savedOn.slice(0, 10)}</span><DeleteBtn
                  onClick={() => this.removeArticle(savedArticles._id)}
                />
                  <TextArea value={savedArticles.snippet} readOnly={true} />
                </li>
              ))}
            </ul>
          </Container>
        </Card>
      </Container>
    );
  }
}

export default Saved;
