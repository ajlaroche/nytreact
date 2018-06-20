import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import "./Articles.css"
import Card from "../../components/Card";
import Saved from "../Saved/Saved";

class Articles extends Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: "",
    articles: [],
  };

  //Enables access to methods in child component
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  savedArticles = (event) => {
    // console.log(event.target.getAttribute("data-headline"));
    const articleData = {
      headline: event.target.getAttribute("data-headline"),
      data: event.target.getAttribute("data-date"),
      url: event.target.getAttribute("data-url"),
      snippet: event.target.getAttribute("data-snippet")
    };
    API.saveArticle(articleData)
      .then(
        this.child.current.loadArticles()   //Access loadArticles method in child component
      )
      .catch(err => console.log(err));
  }

  handleInputChange = event => {          //boiler plate to capture changes as user types in input fields
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm && this.state.startYear && this.state.endYear) {
      API.searchArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
        .then(res => {
          console.log(res.data);
          this.setState({ articles: res.data.response.docs })
        })
        .catch(err => console.log(err));
    };
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron>
            <h1><u>New York Times Article Scrubber</u></h1>
            <h3>Search for and Annotate Articles of Interest</h3>
          </Jumbotron>
          <Card header="Search">
            <Container fluid>
              <form>
                <label>Title</label>
                <Input
                  value={this.state.searchTerm}
                  onChange={this.handleInputChange}
                  type="text"
                  name="searchTerm"
                  placeholder="searchTerm (required)"
                />
                <label>Start Year</label>
                <Input
                  value={this.state.startYear}
                  onChange={this.handleInputChange}
                  type="text"
                  name="startYear"
                  placeholder="Start Year (required)"
                />
                <label>End Year</label>
                <Input
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                  type="text"
                  name="endYear"
                  placeholder="End Year (required)"
                />
                <FormBtn
                  disabled={!(this.state.searchTerm && this.state.startYear && this.state.endYear)}
                  onClick={this.handleFormSubmit}
                >
                  Search
              </FormBtn>
              </form>
            </Container>
          </Card>
          <Card header="Results">
            <Container fluid>
              <ul className="list-group">
                {this.state.articles.map((article, index) => (
                  <li className="list-group-item" key={index}><a href={article.web_url}>{article.headline.main}</a> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date Published: {article.pub_date.slice(0, 10)}</span> <SaveBtn
                    data-headline={article.headline.main}
                    data-date={article.pub_date}
                    data-url={article.web_url}
                    data-snippet={article.snippet}
                    onClick={this.savedArticles}
                  >
                    Save
                </SaveBtn></li>
                ))}
              </ul>
            </Container>
          </Card>
        </Container>
        <Saved ref={this.child} />
      </div>
    );
  }
}

export default Articles;
