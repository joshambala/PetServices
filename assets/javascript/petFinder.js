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
  var queryURL = '';
  $('#search-form').on('submit', function(event) {
  event.preventDefault();

  var services = document.getElementById('services').value;
  var address = document.getElementById('address').value;
  var maxDistance = document.getElementById('maxDistance').value;
  $.ajax({
    url: queryURL,
    method: 'GET',
    data: {
      'api-key':,
      'services': services
    }
  }).done(function(response){
    yelpID = response;
    yelpName = response;
    yelpRating = response;
    yelpAddress = response;
    yelpHours = response;
    yelpWebsite = response;
  });
  getGiphy();
}

function displayYelpData() {
  
}

function getGiphy(){
  
}



