import React from 'react';
import { Component } from 'react'; // Same as doing React.Component
import Podcast from './Podcast.jsx'
import styles from '../styles';

class Layout extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     counter: 0
  //   }
  // };

  // handleClick = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // render() {
  //   return (
  //     <div>
  //       This is my app!!!! { this.state.counter }
  //       <br />
  //       <button onClick={this.handleClick}>Click me!!</button>
  //       {this.props.children}
  //     </div>
  //   )
  // }
  render() {
    return(
      <div>
        <header>
          CastOff - A Podcast Discovery App
          {this.props.children}
          <br />
        </header>

        <div className='footer' style={styles.footer}>
          Footer Info
        </div>
      </div>
    )
  }
  
}

// export default Layout;
module.exports = Layout;