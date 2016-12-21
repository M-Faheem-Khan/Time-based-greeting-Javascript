var show = document.getElementById("item");
var greetings = ["Good Morning", "Good Afternoon", "Good Evening"];

function check(){
     me();
     if (document.getElementById("input").value.length == 0){
          console.log("null");
     } else if (document.getElementById("input").value.length !== 0){
          greets();
     }
}

function greets() {
     var d = new Date();
     var h = d.getHours();
     show.style.display = "block";
     if (h == "12"){
          show.innerHTML =  greetings[1] + " " + document.getElementById("input").value ;
          console.log(greetings[1] + " " + document.getElementById("input").value);
     } else if (h < "12") {
          show.innerHTML = greetings[0] + " " + document.getElementById("input".value);
          console.log(greetings[0] + " " + document.getElementById("input").value);
     } else if (h >= "12"){
          show.innerHTML = greetings[2] + " " + document.getElementById("input").value;
          console.log(greetings[2] + " " + document.getElementById("input").value);
     }
}

function flush() {
     document.getElementById("input").value = "";
     show.style.display = "";
     show.innerHTML = "";
     //clearing console after 2 seconds
     console.log("All clear!");
     setTimeout(function(){con_clear();}, 500);
}

//Console Clearing function
function con_clear(){
     console.API;
     if (typeof console._commandLineAPI !== 'undefined') {
          console.API = console._commandLineAPI; //chrome
     } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
          console.API = console._inspectorCommandLineAPI; //Safari
     } else if (typeof console.clear !== 'undefined') {
          console.API = console;
     }
     console.API.clear();
}

function me(){
     var xhr = new XMLHttpRequest();
     xhr.open("GET", "https://www.codecademy.com/", false);
     xhr.send();

     console.log(xhr.status);
     console.log(xhr.statusText);
}
