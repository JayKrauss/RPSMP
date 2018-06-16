//Connect to database
var config = {
    apiKey: "AIzaSyAmi8IEAHuwfa8p4f9QA8DINQd8WFIY54I",
    authDomain: "rpsmp-ca2d1.firebaseapp.com",
    databaseURL: "https://rpsmp-ca2d1.firebaseio.com",
    projectId: "rpsmp-ca2d1",
    storageBucket: "rpsmp-ca2d1.appspot.com",
    messagingSenderId: "428503359849"
  };
  firebase.initializeApp(config);

  database = firebase.database();

//Global variables
var players = 0;
var seat = 1;

var ready = 0;

var choice = 0;

var water = 1;
var earth = 2;
var fire = 3;

var p1score = 0;
var p2score = 0;

var p1name = 'Player One';
var p2name = 'Player Two';

$(document).ready(function(){

$('body').on('click', '#p1Btn', function(){
    seat = 1;
    console.log('player1')
    console.log(seat)
});
$('body').on('click', '#p2Btn', function(){
    seat = 2;
    console.log('player2')
    console.log(seat)
});

if (seat === 1){
$('body').on('click', '#waterBtn', function(){
    $('.p1choiceimg').css('background-image', 'url(../RPSMP/assets/images/waterchoice.png') 
    $('.p1choiceimg').css('background-size', 'cover');
    $('.fakeh1').text('Water!')
    console.log('water');
});

$('body').on('click', '#earthBtn', function(){
    $('.p1choiceimg').css('background-image', 'url(../RPSMP/assets/images/earthchoice.png') 
    $('.p1choiceimg').css('background-size', 'cover');
    $('.fakeh1').text('Earth!')
    console.log('earth')
});

$('body').on('click', '#fireBtn', function(){
    $('.p1choiceimg').css('background-image', 'url(../RPSMP/assets/images/firechoice.png') 
    $('.p1choiceimg').css('background-size', 'cover');
    $('.fakeh1').text('Fire!')
    console.log('fire')
});
}

else if (seat === 2){
$('body').on('click', '#waterBtn', function(){
    $('.p2choiceimg').css('background-image', 'url(../RPSMP/assets/images/waterchoice.png') 
    $('.p2choiceimg').css('background-size', 'cover');
    $('.fakeh2').text('Water!')
    console.log('water');
});

$('body').on('click', '#earthBtn', function(){
    $('.p2choiceimg').css('background-image', 'url(../RPSMP/assets/images/earthchoice.png') 
    $('.p2choiceimg').css('background-size', 'cover');
    $('.fakeh2').text('Earth!')
    console.log('earth')
});

$('body').on('click', '#fireBtn', function(){
    $('.p2choiceimg').css('background-image', 'url(../RPSMP/assets/images/firechoice.png') 
    $('.p2choiceimg').css('background-size', 'cover');
    $('.fakeh2').text('Fire!')
    console.log('fire')
});
}
});


//Pull player information, update server with player card (push)
$('#seat1').on('click',function seatOne(){

    p1name = prompt('What is your name?');
    $('.player1name').text(p1name);

    database.ref("p1").set({
        name: p1name,
        seat: occupied
    })

});

$('#seat2').on('click', function seatTwo(){

    p2name = prompt('What is your name?');
    $('#player2name').text(p2name);

    database.ref("p2").set({
        name: p2name,
        seat: occupied
    })
});

//Display player choices, accept input and display choice, update player card with choice (set)

//Wait until both players have chosen, then display both choices

//Decide winner and update score on player cards

//Update DOM with score information

//Clear choice data on player cards

//Clear board and continue game
