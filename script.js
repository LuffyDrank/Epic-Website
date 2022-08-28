function showImg1() {
    document.getElementById("img1").style.display = "block";
    document.querySelector("video").play();
}

function hiddeImg() {
    document.getElementById("img1").style.display = "none";
    document.querySelector("video").pause();
}

const select = document.querySelector("select");
const body = document.querySelector("body");

select.addEventListener('change', setBg);

function setBg() {
   const choice = select.value;
   if (choice === "red") {
      document.querySelector("body").style.backgroundColor="red";
      }
      else  if (choice === "white") {
         document.querySelector("body").style.backgroundColor="white";
         }
      else  if (choice === "black") {
         document.querySelector("body").style.backgroundColor="black";
         }
      else  if (choice === "green") {
         document.querySelector("body").style.backgroundColor="green";
         }
      else  if (choice === "blue") {
         document.querySelector("body").style.backgroundColor="blue";
         }
      else  if (choice === "yellow") {
         document.querySelector("body").style.backgroundColor="yellow";
         }
}
/*
const randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);

if (randomNumber > 5) {
   const choice = "red";
   if (choice === "red") {
      document.querySelector("body").style.backgroundColor="red";
      }
      else  if (choice === "white") {
         document.querySelector("body").style.backgroundColor="white";
         }
      else  if (choice === "black") {
         document.querySelector("body").style.backgroundColor="black";
         }
}

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
