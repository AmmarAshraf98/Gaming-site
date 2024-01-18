"use strict";

import * as UI from "./UImodule.js";

// global variables
let anchors = document.querySelectorAll(".navbar-nav .nav-link");
let links = Array.from(anchors);
let btnClose = document.querySelector("#btnClose");
let gameSec = document.querySelector("#games");
let detailSec = document.querySelector("#details");

// row wich display the data
export let myData = document.querySelector("#myData");

// option object for fetch
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e1f75d17famshcba50917d0501f5p18a07ejsn8ae92b1dea5d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

// --------------------------------------------- SEND  CATEGORY   NAME -------------------------
links.map((i) => {
  i.addEventListener("click", (e) => {
    links.map((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
    getData(e.target.dataset.category);
  });
});

// get data
async function getData(x) {
  let category = x;
  let data = await callGames(category);

  // display data in games section
  UI.display(data);

  // add eventLisnter for each card item
  addingEvent();
}
getData("mmorpg");

// Calling games api
async function callGames(category) {
  document.querySelector(".loader").classList.replace("d-none", "d-block");
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    options
  );
  if (response.status === 200)
    document.querySelector(".loader").classList.replace("d-block", "d-none");
  let data = await response.json();
  return data;
}

// add eventLisnter for each card item
function addingEvent() {
  let items = document.querySelectorAll(".item");
  let itemms = Array.from(items);
  itemms.map((e) =>
    e.addEventListener("click", function () {
      console.log(e);
      gameSec.classList.add("d-none");
      detailSec.classList.replace("d-none", "d-block");
      callDetails(this.id);
    })
  );
}

// --------------------------------------------- swapping section  -------------------------
// swapping section when clicking x button to back to games section
btnClose.addEventListener("click", () => {
  detailSec.classList.replace("d-block", "d-none");
  gameSec.classList.remove("d-none");
});

// --------------------------------------------- Details section  -------------------------
// --------------------------------------------- Details section  -------------------------
// --------------------------------------------- Details section  -------------------------
// item wich display the items details
export let details = document.querySelector("#details-data");

// Calling details api
async function callDetails(id) {
  document.querySelector(".loader").classList.replace("d-none", "d-block");
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );
  if (response.status === 200)
    document.querySelector(".loader").classList.replace("d-block", "d-none");
  response.status === 200 ? console.log("hi") : console.log("not");
  let data = await response.json();
  console.log(data);
  UI.detailsDisply(data);
}
