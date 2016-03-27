localStorage.getItem('jon')
null
localStorage.setItem('jon', {name: 'jon'})
undefined
localStorage.getItem('jon')
"[object Object]"
localStorage.setItem('jon', JSON.stringify({name: 'jon'}))
undefined
localStorage.getItem('jon')
"{"name":"jon"}"
JSON.parse(localStorage.getItem('jon'))
Object {name: "jon"}



var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Session = React.createClass({
  // getInitialState: function () {
  //   return {
  //     name: '',
  //     email: ''
  //   }
  // },
  render: function() {
    return (
    // <div>
    //   <h1>LOGIN</h1>
    //   <div className='col-sm-8 col-sm-offset-2'>
    //   {this.props.podcastInfo.map(function(podcast) {
    //     return (
    //       <ListGroup key={podcast.id} >
    //         <ListGroupItem>id: {podcast.id}</ListGroupItem>
    //         <ListGroupItem>{podcast.title}</ListGroupItem>
    //         <ListGroupItem>{podcast.url}</ListGroupItem>
    //       </ListGroup>
    //     )
    //   })}
    //   </div>
    // </div>
    )
  }
});

rails cast = has info on admin stuff!!!
pundit gem, can can gem?


module.exports = Session;

def self.authenticate(token)
  if 





///////////////

var host = 'http://172.46.0.182:3000/';

function constructHeaders() {
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  if (localStorage.get('user')) {
    headers.authorization = user.token;
    return headers;
  } else {

  }
  // add the authorization header
    
  // return headers
  // headers.Authorization = 'LKnnilSsxl_Hlt3yTSrEvA';
}

function setLocalStorage(response) {
  localStorage.setItem('user', JSON.stringify({token: response.authorization_token }))
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

var sessionHelpers = {
  get: function(url) {
    return fetch(`${host}${url}`, {
      method: 'get',
      headers: constructHeaders()
    })
    .then(checkStatus)
    .then(parseJSON)
    .catch(function(error) {
    console.log('request failed', error)
  });
  },
  post: function(url, params) {
    return fetch(`${host}${url}`, {
      method: 'post',
      headers: constructHeaders(),
      body: JSON.stringify(params)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(setLocalStorage)
    .catch(function(error) {
    console.log('request failed', error)
  })
  }
};

module.exports = sessionHelpers;



///////////////
var MyHandler = React.createClass({
  contextTypes: {
    router: Router.PropTypes.router.isRequired
  },
  handleSomeEvent: function () {
    this.context.router.transitionTo( ... );
  }
  // ...
});

////////////
return (
            <div key={mood.id} >
              <ListGroupItem>id: {mood.id}</ListGroupItem>
              <ListGroupItem>{mood.title}</ListGroupItem>
              //<div onClick={this.props.onGoToPlaylist}>
              <img src={mood.image}/>
              //</div>
              //<button type='button' className='btn btn-lg btn-success' onClick={this.props.onGoToPlaylist}>Initiate Battle!</button>
            </div> 
            // <div onClick={props.onGoToPlaylist} key={mood.id} >
            //   <ListGroupItem>id: {mood.id}</ListGroupItem>
            //   <ListGroupItem>{mood.title}</ListGroupItem>
            //   <img src={mood.image}/>
            // </div>  
          )

/////////////

const User = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})


////////////

 <button className="navbar-toggler pull-xs-right hidden-sm-up" type="button" dataToggle="collapse" dataTarget="#bd-main-nav">
              &#9776;
            </button>










