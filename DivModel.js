var divModel;
var span;
var aboutButtom;

document.addEventListener('DOMContentLoaded', function (event){

    //get the div model
    divModel = document.getElementById('about');

    //get the <span>
    span = document.getElementById('closeSpan')[0];

    span.addEventListener("click", close_About);
    window.addEventListener("click", click_on_outter_window);
    addEventListener("keydown", click_escape);
});

function openAbout(){
    divModel.style.display = "block";
}

function closeAbout(){
    divModel.style.display = "none";
}

function click_on_outter_window(event){
    if(event.target == divModel){
        divModel.style.display = "none";
    }
}

function click_escape(key){
    if(key.which == 27){
        divModel.style.display = "none";
    }
}