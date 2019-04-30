var btn = document.getElementById("submitBtn")
var artName = document.getElementById("artist-name")
var albName = document.getElementById("album-name")
var albYear = document.getElementById("album-year")
var albRating = document.getElementById("album-rating")
var albGenre = document.getElementById("album-genre")
var albIsTopTen = document.getElementById("album-isTopTen")
var albYtlink = document.getElementById("album-ytlink")

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

// albums.ref().push(favAlbums);


//Event handler on btn click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  var artistName = artName.value;
  var albumName = albName.value;
  var albumYear = albYear.value;
  var albumRating = albRating.value;
  var albumGenre = albGenre.value;
  var isTopTen = albIsTopTen.value;
  var ytlink = albYtlink.value;
  (isTopTen == "yes") ? isTopTen = true : isTopTen = false;
  var favAlbums = {
    artistName,
    albumName,
    albumYear,
    albumRating,
    albumGenre,
    isTopTen,
    ytlink
  };


  albums.ref().push(favAlbums);

});