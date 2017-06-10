var config = {
  apiKey: "AIzaSyCQ__vhHShTpCE-GENvH5K9jv8bX4iUdXg",
  authDomain: "marksinsaneasylum.firebaseapp.com",
  databaseURL: "https://marksinsaneasylum.firebaseio.com",
  projectId: "marksinsaneasylum",
  storageBucket: "marksinsaneasylum.appspot.com",
  messagingSenderId: "587854779697"
}
firebase.initializeApp(config);
// setting variables
var database = firebase.database();
var yelpID = '';
var yelpName = '';
var yelpRating = '';
var yelpAddress = '';
var yelpHours = '';
var yelpWebsite = '';

function getYelpData() {
  var type = '';
  var queryURL = '';
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response){
    yelpID = response;
    yelpName = response;
    yelpRating = response;
    yelpAddress = response;
    yelpHours = response;
    yelpWebsite = response;
  });
}

function displayYelpData() {
  
}

