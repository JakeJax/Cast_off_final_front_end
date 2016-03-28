var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function Home () {
  return (
    <div className="homeContainer">
      <div className="home">

      <h1>Welcome to CastOff!</h1>
      <h2>A bit about CastOff</h2>
      <br />
      <p>
        Have you ever been CRAVING a podcast, trying to figure out which one to listen to, then finally select one only to realize that it is not what you want at all??
      </p>
      <p>
        WE'RE HERE TO HELP! Cast Off allows you to select a range of podcasts for you based on the mood you're in at the time.
      </p>
      <Link to='/mood'>
        <button type='button' className='btn btn-lg btn-primary'>Get Started</button>
      </Link>
      </div>
      <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
    </div>

  )
}

module.exports = Home;