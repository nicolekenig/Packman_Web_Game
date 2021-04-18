function openingPage(){
    showDiv('welcome');
}

function showDiv(divId){

    //hide all div
    var welcomeDiv = document.getElementById('welcome');
    welcomeDiv.style.visibility = 'hidden';
    var registerDiv = document.getElementById('register');
    registerDiv.style.visibility = 'hidden';
    var loginDiv = document.getElementById('login');
    loginDiv.style.visibility = 'hidden';
    var settingsDiv = document.getElementById('settings');
    settingsDiv.style.visibility = 'hidden';
    var aboutDiv = document.getElementById('about');
    aboutDiv.style.visibility = 'hidden';
    var gameDiv = document.getElementById('game');
    gameDiv.style.visibility = 'hidden';
    var welcomeDiv = document.getElementById('gameOver');
    gameOver.style.visibility = 'hidden';

    //show only the divID div
    var divToShow = document.getElementById(divId);
    divToShow.style.visibility = "visible";



}