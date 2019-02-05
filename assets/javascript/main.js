$(document).ready(function() {

    $('#page2Container').hide();
    $('#page3Container').hide();

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD74j796VyazU_qVmi6ehP2ilzjjYG6Tx8",
    authDomain: "ucla-example-8388c.firebaseapp.com",
    databaseURL: "https://ucla-example-8388c.firebaseio.com",
    projectId: "ucla-example-8388c",
    storageBucket: "ucla-example-8388c.appspot.com",
    messagingSenderId: "1069772039049"
  };
  firebase.initializeApp(config);

    var database = firebase.database();

    $('#submitButton').on('click', function () {

      event.preventDefault();

      var input1 = $('#exampleInputEmail1').val().trim();
      console.log(input1);

      database.ref().push({
        user: input1,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });//end of database.ref().push

      $('#logInContainer').hide();
      $('#page2Container').show();


    });//end of on 'click'



      $('#submitButton2').on('click', function () {
        var userInput = $('#zipCodeInput').val().trim();
        var corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'
        var queryUrl = corsAnywhereUrl + 'https://api.yelp.com/v3/businesses/search?location=' + userInput + '';
        console.log(userInput);
        

        $.ajax({
          url: queryUrl,
          method: "GET",
          headers: {
            "Authorization": "Bearer fwwcFCIz5wi8JTslUMzF7CU53svp7ApM2pe-etytu_6sF32J1VEUsNUx5dVCDw4-fwINnj1wt-EifXxKlTrP4v9kHJ_RKGocD--S75IPpw4ITaM594ql2rQ5WfRVXHYx"
          }

        }).then(function (response) {

          console.log(response);
          $('#page2Container').hide();
          $('#page3Container').show();
          $('#page3Container2').show();

          for (var i = 0; i < 10; i++ ) {
          console.log(response.businesses[i].name);
          var newDivRestaurants = $('<div class="restaurant">');
          $(newDivRestaurants).append(response.businesses[i].name);
          $('#page3Container').append(newDivRestaurants);
          }


        });//end of second ajax request


      });//end on click button2

    

  });


 