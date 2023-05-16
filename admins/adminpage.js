const userinput = document.getElementById("email");
const userpassword = document.getElementById("pass");
const submitbtn = document.getElementById("submit");
const email1 = "itsvbhardwaj9721@gmail.com";
const pass1 = "library1";
const email2 = "gopi";
const pass2 = "lib";

submitbtn.onclick = function evaluateuser(pass, evaluate) {
  if (userinput.value == email1 && userpassword.value == pass1) {
    window.open("./adminpage.html", "_self");
  } else if (userinput.value == email2 && userpassword.value == pass2) {
    window.open("./adminpage.html", "_self");
  } else {
    alert("wrong credentials");
  }
};
