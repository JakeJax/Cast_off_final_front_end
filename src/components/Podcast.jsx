import React from 'react';
import { Component } from 'react'; // Same as doing React.Component
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Podcast extends Component {

  constructor(props) {
    super(props)

    this.state = {};
  }

  componentWillMount() {
    axios.get('http://localhost:3000/podcasts')
      .then( (response) => {
        this.setState({podcasts: response.data})
      })
  }

  showPodcasts = () => {
    return this.state.podcasts.map( (podcast) => {
      return (
        <ListGroup key={podcast.id} >
          <ListGroupItem>id: {podcast.id}</ListGroupItem>
          <ListGroupItem>{podcast.title}</ListGroupItem>
          <ListGroupItem>{podcast.like_count}</ListGroupItem>
        </ListGroup>
      )
    })
  };

  render() {
    return (
      <div>
        {this.state.podcasts ? this.showPodcasts() : ''}
      </div>
    )
  }

}

export default Podcast;