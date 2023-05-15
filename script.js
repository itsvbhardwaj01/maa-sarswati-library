"use strict";

// my Variables
const gmap_btn = document.getElementById("footer-btns");
const login_btn = document.getElementById("login");
const signup_btn = document.getElementById("signup");

// Functions
const googlemap = function (urls, location) {
  if (gmap_btn.onclick) {
    window.open(
      "https://goo.gl/maps/GDda3Xj1ZDHR2nsAA?coh=178573&entry=tt",
      "_blank"
    );
  }
};

// login redirect

const loginredirect = function (route, path) {
  if (login_btn.onclick) {
    window.open("./login.html", "_self");
  }
};
const signupredirect = function (route, path) {
  if (signup_btn.onclick) {
    window.open("./signup.html", "_self");
  }
};
