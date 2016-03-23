var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function Home () {
  return (
    <div>
      <Link to='/mood'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
  )
}

module.exports = Home;