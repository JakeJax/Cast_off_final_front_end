
$(document).ready(function() {

  function getPlaylist() {
    const listJson = localStorage.getItem('playlist');
    return listJson ? JSON.parse(listJson) : [];
  }

  var playlist = getPlaylist();

  window.clearPlaylist = function(){
    $('#musicPlayer .info').html("CastOff");
    playlist = getPlaylist();
  }


  var aud = $('#musicPlayer .aud').get(0);
  aud.pos = -1;

  window.updatePlaylist = function(new_playlist){
    playlist = new_playlist;
  }

  window.setPlayerSrc = function(url, title) {
    aud.setAttribute('src', url);
    $('#musicPlayer .info').html(title);
  }

  window.addPlayerSrc = function(new_url, new_title) {
    new_pod = { title: new_title, url: new_url }
    playlist.push(new_pod)
    setPlayerSrc(playlist[0].url, playlist[0].title)
  }

  window.playAllSrc = function(new_playlist) {
    playlist = new_playlist
    setPlayerSrc(playlist[0].url, playlist[0].title)
  }

  $('.playAll').bind('click', function(e) {
    e.preventDefault();
    aud.load();
    aud.play();
  })


  $('#musicPlayer .play').bind('click', function(e) {
    e.preventDefault();
    playlist = getPlaylist();
    if (aud.pos < 0) {
      $('#musicPlayer .next').trigger('click');
    } else {
      aud.play();
    }
  });

  $('#musicPlayer .pause').bind('click', function(e) {
    e.preventDefault();
    aud.pause();
  });

  $('#musicPlayer .next').bind('click', function(e) {
    e.preventDefault();
    aud.pause();
    aud.pos++;
    if (aud.pos == playlist.length) aud.pos = 0;

    setPlayerSrc(playlist[aud.pos].url, playlist[aud.pos].title)
    // aud.play();
    aud.load();
  });

  $('#musicPlayer .prev').bind('click', function(e) {
    e.preventDefault();
    aud.pause();
    aud.pos--;
    if (aud.pos < 0) aud.pos = playlist.length - 1;
    aud.setAttribute('src', playlist[aud.pos].url);
                      $('#musicPlayer .info').html(playlist[aud.pos].title);
    aud.load();
  });

  aud.addEventListener('progress', function(e) {
    var width = parseInt($('#musicPlayer').css('width'));
    var percentLoaded = Math.round(e.loaded / e.total * 100);
    var barWidth = Math.ceil(percentLoaded * (width / 100));
    $('#musicPlayer .load-progress').css( 'width', barWidth );
  });

  aud.addEventListener('timeupdate', function(e) {
    var width = parseInt($('#musicPlayer').css('width'));
    var percentPlayed = Math.round(aud.currentTime / aud.duration * 100);
    var barWidth = Math.ceil(percentPlayed * (width / 100));
    $('#musicPlayer .play-progress').css( 'width', barWidth);
  });

  aud.addEventListener('canplay', function(e) {
    $('#musicPlayer .play').trigger('click');
  });

  aud.addEventListener('ended', function(e) {
    $('#musicPlayer .next').trigger('click');
  });



  $('.loader').bind('click', function (e) {
    var $div = $(e.target);
    var $loader = $div.find('.load-progress');
    var $loadBar = $('.loader');

    var offset = $div.offset();
    var x = e.clientX - offset.left;
    aud.currentTime = x/$loadBar.width()*aud.duration
    aud.play();

    $('.play-progress').width(x);

  });

});

//bgslideshow 
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  10000);
