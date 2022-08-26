function showImg1() {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "none";
}
function showImg2() {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "block";
}

function hiddeImg() {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
}

const select = document.querySelector("select");
const body = document.querySelector("body");

select.addEventListener('change', setWeather);

function setWeather() {
   const choice = select.value;
if (choice === "red") {
 document.querySelector("body").style.backgroundColor="red";
}
if (choice === "white") {
   document.querySelector("body").style.backgroundColor="white";
  }
if (choice === "black") {
   document.querySelector("body").style.backgroundColor="black";
  }

}
/*
let userName = prompt("userName");

if (userName === "Admin") {

   let pass = prompt("Password?");

   if (pass === "TheMaster") {
      alert("Welcome back daddy");
   }
   else if (pass = null || pass === "")
   {
   alert("Cancelled");
   }
   else  {
      alert("You're definitely not my daddy");
      }
} 

else if (userName === "" || userName === null) {
   alert("Cancelled");
}
else (
   alert("Who the fuck are you, I want my daddy to come and 'Come' inside me")
)


*/
