var Spotify = require('spotify-web-api-js');
var spotifyApi = new SpotifyWebApi();
spotifyApi.setPromiseImplementation(Q);

// get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });