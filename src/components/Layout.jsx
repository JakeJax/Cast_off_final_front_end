import React from 'react';
import { Component } from 'react'; // Same as doing React.Component
import Header from './Header.jsx'
import styles from '../styles';
import Player from './Player.jsx';
// import publicMainStyle from '../public/css/main.css';


class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem('user')
    };
  };

  setToken = (token) => {
    this.setState({
      token: token
    })
  };

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
              <div className="logoContainer">        
                <img className="bottom" src="../src/public/images/castOffLogoOutline.png" />
                <img className="top" src="../src/public/images/castOffLogo.png" />
              </div>
            </a>
            <a className="navbar-brand hidden-sm-up" href="/">  
              <div className="wordmarkContainer">        
                CastOff
              </div>
            </a>
            <nav>
              <Header token={this.state.token}
                setToken={this.setToken}/>
            </nav>
          </div>
        <div className="collapse navbar-toggleable-xs" id="bd-main-nav">
        </div>
        </header>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { setToken: this.setToken });
          })}
        <br />
        <Player />  
      </div>
    );
  }
};

            


module.exports = Layout;


