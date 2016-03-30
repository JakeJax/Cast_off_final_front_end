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
          WE'RE HERE TO HELP! Cast Off allows you to select a range of podcasts based on what you're in the mood for at the time.
        </p>
        <Link to='/mood'>
          <button type='button' className='btn btn-lg btn-primary'>Get Started</button>
        </Link>
      </div>
      <div id="slideshow">
        <div>
          <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
        </div>
        <div>
          <img src="../src/public/images/northernlights.jpg" alt="" id="homeBg" />
        </div>
        <div>
          <img src="../src/public/images/gasformation.jpg" alt="" id="homeBg" />
        </div>
      </div>
    </div>

  )
}

module.exports = Home;