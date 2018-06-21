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

var p1score = 1;
var p2score = 1;

var player1name = 'Player One';
var player2name = 'Player Two';

$(document).ready(function(){

//Pull player information, update server with player card (push)
$('#p1Btn').on('click', function(){
    
    database.ref("Player One").on("value", function(snapshot) {
        console.log(snapshot.val().occupied);
    if (snapshot.val().occupied === false){

    $('#nameModal1').modal('toggle');

    $('#nameSubmit1').on('click', function(){
        player1name = $('#playername').val().trim();

        database.ref("Player One").set({
            name: player1name,
            occupied: true});

        $('.seat1name').text(player1name);
        $('.fakehn1').text(player1name + ' chooses:');
    })

    p1score = 0;
    seat = 1;
}

});

$('#p2Btn').on('click', function(){
   

database.ref("Player Two").on("value", function(snapshot) {
        console.log(snapshot.val().occupied);

    if (snapshot.val().occupied === false){
    $('#nameModal2').modal('toggle');

    $('#nameSubmit2').on('click', function(){
        player2name = $('#playername2').val().trim();

        database.ref("Player Two").set({
            name: player2name,
            occupied: true});

        $('.seat2name').text(player2name);
        $('.fakehn2').text(player2name + ' chooses:');
    })
     p2score = 0; 
     seat = 2;
 }
    

});

});
//Display player choices, accept input and display choice, update player card with choice (set)
$('#waterBtn').on('click', function(){
    if (seat === 1){
    $('.p1choiceimg').css('background-image', 'url(../RPSMP/assets/images/waterchoice.png') 
    $('.p1choiceimg').css('background-size', 'cover');
    $('.fakeh1').text('Water!')
    database.ref("Player One").set({
        name: player1name,
        occupied: true,
        choice: 1
    });
    console.log('water');}
    else if (seat === 2){
$('.p2choiceimg').css('background-image', 'url(../RPSMP/assets/images/waterchoice.png') 
    $('.p2choiceimg').css('background-size', 'cover');
    $('.fakeh2').text('Water!')
    database.ref("Player Two").set({
        name: player2name,
        occupied: true,
        choice: 1
    });
    console.log('water');}
});

$('#earthBtn').on('click', function(){
    if (seat === 1){
    $('.p1choiceimg').css('background-image', 'url(../RPSMP/assets/images/earthchoice.png') 
    $('.p1choiceimg').css('background-size', 'cover');
    $('.fakeh1').text('Earth!')
    database.ref("Player One").set({
        name: player1name,
        occupied: true,
        choice: 2
    });
    console.log('earth')}
    else if (seat === 2){
    $('.p2choiceimg').css('background-image', 'url(../RPSMP/assets/images/earthchoice.png') 
    $('.p2choiceimg').css('background-size', 'cover');
    $('.fakeh2').text('Earth!')
    database.ref("Player Two").set({
        name: player2name,
        occupied: true,
        choice: 2
    });
    console.log('earth')}
    else {
        alert('You must take a seat first!')
    }
});

$('#fireBtn').on('click', function(){
    if (seat === 1){
    $('.p1choiceimg').css('background-image', 'url(../RPSMP/assets/images/firechoice.png') 
    $('.p1choiceimg').css('background-size', 'cover');
    $('.fakeh1').text('Fire!')
    database.ref("Player One").set({
        name: player1name,
        occupied: true,
        choice: 3
    });
    console.log('fire')}
    else if (seat === 2){
    $('.p2choiceimg').css('background-image', 'url(../RPSMP/assets/images/firechoice.png') 
    $('.p2choiceimg').css('background-size', 'cover');
    $('.fakeh2').text('Fire!')
    database.ref("Player Two").set({
        name: player2name,
        occupied: true,
        choice: 3
    });
    console.log('fire')
    }
    else {
        alert('You must take a seat first!')
    }
});
});
//Wait until both players have chosen, then display both choices

//Decide winner and update score on player cards

//Update DOM with score information

//Clear choice data on player cards

//Clear board and continue game

});










