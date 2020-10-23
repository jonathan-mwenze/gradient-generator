var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient(){
   body.style.background  = 
   "linear-gradient(to right,"
   +color1.value
   +", "
   +color2.value
   +")";

   css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//css.textContent = color2.value;
   //console.log(color2.value);
   //oninput="setGradient()" add this code in the input html line code 
   //and comment this two lines color1.addEventListener("input", setGradient) 

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var temps = setTimeout(function(){
     currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */


