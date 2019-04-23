var config = {
  apiKey: "AIzaSyC-y1i9FL4Wu9Zum70qsc8ACAqJvKhAnjs",
  authDomain: "rate-albums.firebaseapp.com",
  databaseURL: "https://rate-albums.firebaseio.com",
  projectId: "rate-albums",
  storageBucket: "rate-albums.appspot.com",
  messagingSenderId: "765439228855"
};
firebase.initializeApp(config);

var albums = firebase.database();
console.log(albums);

//Create data model
var favAlbums = {
  artistName,
  albumYear,
  albumRating,
  albumGenre,
  isTopTen
};
