const gmap_btn = document.getElementById("footer-btns");
const loginbtn = document.getElementById("login_btn");
const signup_btn = document.getElementById("signup");
const admin_btn = document.getElementById("admin");
const totalseat = document.getElementById("h23");
const bookedseat = document.getElementById("h22");
const vacantseat1 = document.getElementById("h21");
const pricebtn = document.getElementById("pricing");
const email1 = "itsvbhardwaj9721@gmail.com";
const pass1 = "library1";
const email2 = "gopi";
const pass2 = "lib";
const updatebtn1 = document.getElementById("updatebtn");
const box_update = document.getElementById("updatebox");
const done1 = document.getElementById("doneupdating");
const containerbox = document.getElementById("container1");
const userinput = document.getElementById("email");
const userpassword = document.getElementById("pass");
const infobox = document.getElementById("info1");

// Functions
// showing location on location button

const googlemap = function (urls, location) {
  if (gmap_btn.onclick) {
    window.open(
      "https://goo.gl/maps/GDda3Xj1ZDHR2nsAA?coh=178573&entry=tt",
      "_blank"
    );
  }
};

// login redirect
function redirectlogin() {
  window.open("./login/login.html", "_self");
}

// signup route
function redirectsignup() {
  window.open("./signup/signup.html", "_self");
}

// admin login route
function adminlogin() {
  window.open("./admins/admin.html", "_self");
}
// pricing route
function priceopen() {
  window.open("./pricing/pricing.html", "_self");
}

//////////////////  admin login//////////////////////////////

const submitbtn1 = document.getElementById("submit11");

function evaluate1() {
  if (userinput.value == email1 && userpassword.value == pass1) {
    window.open("./adminpage.html", "_self");
  } else if (userinput.value == email2 && userpassword.value == pass2) {
    window.open("./adminpage.html", "_self");
  } else {
    alert("wrong credentials");
  }
}
///////////////////////////////////////////////////////////////////////

////////////// retrieving user data from local storage//////////////////////

const retrievedata = JSON.parse(localStorage.getItem("userdata"));

console.log(retrievedata);

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// localStorage.setItem(
//   (retrievedata[0].status = "booked"),
//   JSON.stringify(retrievedata)
// );
////////////////////////////////////////////////////////
////////////////// show all seats///////////////////

function showtotalseat(seat, display) {
  totalseat.innerHTML = retrievedata.length;
}
showtotalseat();
///////////////////////////////////////////////////////////

////////////// show booked seat////////////////////////////

let newbookedseat = [];
function showbookedseat() {
  for (let i = 0; i < retrievedata.length; i++) {
    if (retrievedata[i].status == "booked") {
      newbookedseat = [...newbookedseat, retrievedata[i]];
      bookedseat.innerHTML = newbookedseat.length;
    }
  }
}
showbookedseat();
////////////////////////////////////////////////////////////////
/////////////////// show vacant seat/////////////////////////
let vacantseat = [];
function showvacantseat() {
  for (let i = 0; i < retrievedata.length; i++) {
    if (retrievedata[i].status == "notbooked") {
      vacantseat = [...vacantseat, retrievedata[i]];
      vacantseat1.innerHTML = vacantseat.length;
    }
  }
}
showvacantseat();
/////////////////////////////////////////////////////////////////////

///////////////////// show update box///////////////////////////////

function showupdatebox() {
  box_update.style.display = "block";
  done1.style.display = "block";
  containerbox.style.display = "none";
}
//////////////////// hide update box////////////////////////////////

function hideupdatebox() {
  box_update.style.display = "none";
  done1.style.display = "none";
  containerbox.style.display = "flex";
}
////////////////////// show info box//////////////////////////////////

function showinfobox(click, result) {
  infobox.style.display = "block";
}
showinfobox();
// hide info box

function hideinfobox(click, result) {
  infobox.style.display = "none";
}
