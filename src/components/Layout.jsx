import React from 'react';
import { Component } from 'react'; // Same as doing React.Component
import Header from './Header.jsx'
import styles from '../styles';
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
              <div className="logoContainer">        
                <img className="bottom" src="../src/public/images/castOffLogoOutline.png" />
                <img className="top" src="../src/public/images/castOffLogo.png" />
              </div>
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
        

        <div className='footer' style={styles.footer}>
          <div id="musicPlayer">
            <div className="info">Please wait...</div>
              <div className="loader">
                <div className="load-progress">
                  <div className="play-progress">
                  </div>
                </div>
              </div>
              <div className="controls">
                <a className="prev" href="#"><span>Prev</span></a>
                <a className="play" href="#"><span>Play</span></a>
                <a className="pause" href="#"><span>Pause</span></a>
                <a className="next" href="#"><span>Next</span></a>
              </div>
              <audio className="aud">
                <p>Oops, looks like your browser doesnt support HTML 5 audio.</p>
              </audio>
            </div>
          </div>
        </div>

    );
  }
};

            


module.exports = Layout;


