// my Variables
const gmap_btn = document.getElementById("footer-btns");
const login_btn = document.getElementById("login");
const signup_btn = document.getElementById("signup");
const admin_btn = document.getElementById("admin");
const totalseat = document.getElementById("h23");
const bookedseat = document.getElementById("h22");
const vacantseat1 = document.getElementById("h21");
// all seats as objects in an array

const all_seat = [
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "notbooked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "notbooked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "notbooked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
  {
    name: "vikash",
    seat: 02,
    phone: 9430666178,
    address: "bhagwanpur",
    status: "booked",
  },
];

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
login_btn.onclick = function () {
  window.open("./login/login.html", "_self");
};

// signup route
signup_btn.onclick = function () {
  window.open("./signup/signup.html", "_self");
};

// admin login route
admin_btn.onclick = function () {
  window.open("./admins/admin.html", "_self");
};

// show all seats
function showtotalseat(seat, display) {
  totalseat.innerHTML = all_seat.length;
}
showtotalseat();
// show booked seat

let newbookedseat = [];
for (let i = 0; i < all_seat.length; i++) {
  if (all_seat[i].status == "booked") {
    newbookedseat = [...newbookedseat, all_seat[i]];
    bookedseat.innerHTML = newbookedseat.length;
  }
}
// show vacant seat
let vacantseat = [];
for (let i = 0; i < all_seat.length; i++) {
  if (all_seat[i].status == "notbooked") {
    vacantseat = [...vacantseat, all_seat[i]];
    vacantseat1.innerHTML = vacantseat.length;
  }
}
