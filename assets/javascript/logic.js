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

var player1name = 'Player One';
var player2name = 'Player Two';

$(document).ready(function(){

$('body').on('click', '#p1Btn', function(){
    seat = 1;

    $('#nameModal').modal('toggle');

    database.ref("Player One").set({
        name: player1name,
        occupied: true});

    $('.seat1name').text(player1name);
    p1score = 0;

    console.log(player1name)
    console.log(seat)
});

$('body').on('click', '#p2Btn', function(){
    seat = 2;

    $('#nameModal').modal('toggle');
    player1name = $('#formName').text()

    database.ref("Player Two").set({
        name: player2name,
        occupied: true});

    $('.seat2name').text(player2name);

    console.log('player2')
    console.log(seat)
});

$('#nameSubmit').on('click', function(){
    player1name = $('input').val().trim();
    console.log(player1name)
})

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


//Display player choices, accept input and display choice, update player card with choice (set)

//Wait until both players have chosen, then display both choices

//Decide winner and update score on player cards

//Update DOM with score information

//Clear choice data on player cards

//Clear board and continue game
