var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import { ListGroup, ListGroupItem } from 'react-bootstrap';

var Session = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var name = ReactDOM.findDOMNode(this.refs.nameInput).value;
    var password = ReactDOM.findDOMNode(this.refs.passwordInput).value;

    this.props.onSubmitLogin(name, password);
  },

  render: function() {
    return (
      <div className="loginContainer">
        <h1>LOGIN</h1>
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='Name'
                type='text'
                ref="nameInput"
                value={this.props.name} />
            </div>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='password'
                type='password'
                ref="passwordInput"
                value={this.props.password} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-primary"
                type="submit">
                  Login
              </button>
            </div>
          </form>
        </div>

          <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
      </div>
    )
  }
})

module.exports = Session;