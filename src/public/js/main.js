// the playlist is just a JSON-style object.
var playlist = [
{ 
  title : "Episode 84 - Willy Russell",
  url : "http://traffic.libsyn.com/sodajerker/episode_84_willy_russell.mp3"
},
{
  title: "Episode 83 - Scroobius Pip",
  url: "http://traffic.libsyn.com/sodajerker/episode_83_scroobius_pip.mp3"
},
{ 
  title: "Little Atoms 407: Maria Konnikova and The Confidence Game",
  url: "http://rss.acast.com/littleatoms/littleatoms407-mariakonnikovaandtheconfidencegame/media.mp3"
},
{
  title: "Little Atoms 406 - Kathryn Harkup and A is for Arsenic",
  url: "http://rss.acast.com/littleatoms/littleatoms406-kathrynharkupandaisforarsenic/media.mp3"
},
{
  title: "Episode 43: A Gumbo of Afrofuturism (with Vann R. Newkirk II)",
  url: "http://rss.acast.com/anotherround/episode43-thegumboofafrofuturism-withvannr.newkirkii-/media.mp3"
},
{
  title: "Episode 42: Fried Chicken Is A Battleground (with Wyatt Cenac)",
  url: "http://rss.acast.com/anotherround/episode42-friedchickenisabattleground-withwyattcenac-/media.mp3"
}
];

$(document).ready(function() {

  var aud = $('#musicPlayer .aud').get(0);
  aud.pos = -1;

  $('#musicPlayer .play').bind('click', function(e) {
    e.preventDefault();
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
    aud.setAttribute('src', playlist[aud.pos].url);
                      $('#musicPlayer .info').html(playlist[aud.pos].title);
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


  $('#musicPlayer .info').html(playlist[0].title);

  $('.loader').bind('click', function (e) {
    var $div = $(e.target);
    var $loader = $div.find('.load-progress');
    var $loadBar = $('.loader');

    var offset = $div.offset();
    var x = e.clientX - offset.left;
    // console.log(x, $loadBar.width(), aud.duration)
    // console.log(x/$loadBar.width()*aud.duration)
    aud.currentTime = x/$loadBar.width()*aud.duration
    aud.play();

    $('.play-progress').width(x);

  });

});
