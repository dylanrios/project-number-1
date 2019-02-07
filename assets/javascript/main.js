$(document).ready(function () {


  // function validateEmail(email) {
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }

  // function validate() {
  //   var $result = $("#result");
  //   var email = $("#email").val();
  //   $result.text("");

  //   if (validateEmail(email)) {
  //     $result.text(email + " is valid :)");
  //     $result.css("color", "green");
  //   } else {
  //     $result.text(email + " is not valid :(");
  //     $result.css("color", "red");
  //   }
  //   return false;
  // }

  //  $("#validate").bind("click", validate);





  $('#page2Container').hide();
  $('#page3Container').hide();
  $("#page3Container2").hide();


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

  // $('#validate').on('click', function () {

  // event.preventDefault();


  //////////////////////////////////////
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    console.log(email);
    $result.text("");

    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
      
      database.ref().push({
        user: email,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });//end of database.ref().push

      $('#logInContainer').hide();
      $('#page2Container').show();

    } else {
      // $result.text(email + " is not a valid email!");
      // $result.css("color", "red");
      $(".modal").show();
      // $('.modal').modal('toggle');
      function a () {
        $('.modal').hide();
      }
      setTimeout(a, 3000);
    }
    return false;
  }

  $("#validate").bind("click", validate);

  /////////////////////////////////////





  // var input1 = $('#exampleInputEmail1').val().trim();
  // console.log(input1);

  // database.ref().push({
  //   user: email,
  //   dateAdded: firebase.database.ServerValue.TIMESTAMP
  // });//end of database.ref().push

  // $('#logInContainer').hide();
  // $('#page2Container').show();


  // });//end of on 'click'



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
      // $('#page3Container2').show();

      for (var i = 0; i < 10; i++) {
        console.log(response.businesses[i].name);
        var newDivRestaurants = $('<div class="restaurant">');
        // $(newDivRestaurants).append(response.businesses[i].name).append(response.businesses[i].price).append(response.businesses[i].rating).append('<img src=' + response.businesses[i].image_url + '></img>');
        var restaurantCard = $(' <div class="col s12 m9" id="cardDisplay"> <div class="card horizontal"> <div class="card-image"> <img src=' + response.businesses[i].image_url +'> </div> <div class="card-stacked"> <div class="card-content"><h5 class="header">' + response.businesses[i].name + '</h5><p>' + response.businesses[i].rating +' , '+ response.businesses[i].price + '</p> </div> <div class="card-action"> <a href='+ response.businesses[i].url +'>More info</a> </div> </div> </div> </div>')
        $(newDivRestaurants).append(restaurantCard);
        
        $('#page3Container').append(newDivRestaurants);
      }


    });//end of second ajax request
  });//end of second ajax request


  //end on click button2



  // $('#hi').on('click', function () {

  function b(){
    $('#page3Container2').show();
  var a = Math.floor(Math.random() * 1500);
  var corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
  var queryURL = corsAnywhereUrl + "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=" + a + "&CMC_PRO_API_KEY=e086943b-ef20-40d5-8fb0-bfbcb7bbbd53";



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // var results = response.data;
    console.log(response.data[a]);

    var loga = response.data[a].logo;


    $("#image").attr("src", loga);
    $(".card-title").text(response.data[a].name)
    $(".card-text").text(response.data[a].symbol)
    $("#hi").attr("href", response.data[a].urls.website);

    // $("#hi").on("click", function() {
    // window.location.href = response.data[a].urls.website;

    // });

    console.log(response.data[a].urls.website)


  });
  };

  $("#page3Container").on("click", function(){
   
   b();
  //  $('#page3Container2').show();

  });
  // });





});


