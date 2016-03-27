


var styles = {
  footer: {
    position: 'fixed',
    bottom: '0',
    height: '115px',
    width: '100%'
  },
  musicPlayer: {
    backgroundColor: '#eee',
    borderRadius: '50px',
    border: '1px solid black',
    padding: '10px',
    fontFamily: 'helvetica, arial, verdana',
    fontWeight: 'bold',
    width: '95%',
    margin: '0 auto',
    textAlign: 'center'
  },
  loader: {
    border: '1px solid #fff',
    height: '3px',
    margin: '10px 0px'
  },
  loadProgress: {
    width: '0px',
    backgroundColor: '#fff',
    height: '3px',
  },
  playProgress: {
    width: '0px',
    backgroundColor: '#fff',
    height: '3px',
  },
  controls: {
    textAlign: 'center'
  },
  prev: {
    display: 'inlineBlock',
    width: '50px',
    height: '50px',
    margin: '0px 14px',
    overflow: 'hidden',
    backgroundImage: "url('../public/images/back.png')",
    backgroundRepeat: 'noRepeat'
  },
  next: {
    display: 'inlineBlock',
    width: '50px',
    height: '50px',
    margin: '0px 14px',
    overflow: 'hidden',
    backgroundImage: 'url(../public/images/next.png)',
    backgroundRepeat: 'noRepeat',
  },
  pause: {
    display: 'inlineBlock',
    width: '50px',
    height: '50px',
    margin: '0px 14px',
    overflow: 'hidden',
    backgroundImage: "url('../public/images/pause.png')",
    backgroundRepeat: 'noRepeat' 
  },
  play: {
    display: 'inlineBlock',
    width: '50px',
    height: '50px',
    margin: '0px 14px',
    overflow: 'hidden',
    backgroundImage: 'url(require(../public/images/play.png))',
    backgroundRepeat: 'noRepeat'
  }

};





module.exports = styles;
