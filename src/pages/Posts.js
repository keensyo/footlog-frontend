import React from 'react';
import Layout from "../components/Layout";

import {Row,Col} from "react-bootstrap"

import MatchInfo from "../components/MatchInfo"
// import MatchInfo2 from "../components/MatchInfo2"

export default class Posts extends React.Component {
  constructor(){
    super()
    this.state = {
      loading:false,
      character: {},
    }
  }

  componentDidMount(){
    this.setState({
      loading: true
    })
    // fetch("https://swapi.dev/api/people/1")
    fetch("http://localhost:3000/v1/matches")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        console.log(this)
        this.setState({
          character: data.data,
          loading: false
        })
      }
    )
  }

  render() {
    const displayText = this.state.loading ? "now loading...." : JSON.stringify(this.state.character)
    return (
      <Layout>
        <div>Posts Page!</div>
        <div>{displayText}</div>
        <Row xs={1} md={2} className="g-4">
          <Col><MatchInfo /></Col>
          {/* <Col><MatchInfo2 /></Col> */}
        </Row>
      </Layout>
    );
  }
}