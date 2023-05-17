const userinput = document.getElementById("email");
const userpassword = document.getElementById("pass");
const submitbtn = document.getElementById("submit");
const updatebtn1 = document.getElementById("updatebtn");
const updatediv1 = document.getElementById("updatebox");
const done = document.getElementById("doneupdating");
const containerbox = document.getElementById("container1");

//  admin login
submitbtn.onclick = function evaluateuser(pass, evaluate) {
  const email1 = "itsvbhardwaj9721@gmail.com";
  const pass1 = "library1";
  const email2 = "gopi";
  const pass2 = "lib";
  if (userinput.value == email1 && userpassword.value == pass1) {
    window.open("./adminpage.html", "_self");
  } else if (userinput.value == email2 && userpassword.value == pass2) {
    window.open("./adminpage.html", "_self");
  } else {
    alert("wrong credentials");
  }
};

// show update box
function showupdatebox() {
  if (updatebtn1.onclick) {
    return (updatediv1.style.display = "block")((done.style.display = "block"))(
      (containerbox.style.display = "none")
    );
  } else {
    console.log("bad request");
  }
}

// hide update box

function hideupdatebox() {
  const updatebtn1 = document.getElementById("updatebtn");
  const updatediv1 = document.getElementById("updatebox");

  if (updatebtn1.onclick) {
    return (updatediv1.style.display = "none")((done.style.display = "none"));
  } else {
    console.log("bad request");
  }
}
