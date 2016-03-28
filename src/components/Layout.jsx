import React from 'react';
import { Component } from 'react'; // Same as doing React.Component
import Header from './Header.jsx'
import styles from '../styles';
import Player from './Player.jsx';
// import publicMainStyle from '../public/css/main.css';


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
        
        <header className="navbar navbar-light navbar-static-top bd-navbar" roll="banner">
          <div className="clearfix">
            <a className="navbar-brand hidden-sm-up" href="/">
              CastOff
            </a>
            <nav>
              <Header />
            </nav>
          </div>
        <div className="collapse navbar-toggleable-xs" id="bd-main-nav">
        </div>
        </header>
          {this.props.children}
        <br />
        <Player />  
      </div>
    );
  }
};

            


module.exports = Layout;


