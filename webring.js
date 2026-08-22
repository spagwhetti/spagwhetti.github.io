
const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/spagwhetti/spagwhetti.github.io/main/webring.json`;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = decodeURI(urlParams.get('name'));
const prev = document.getElementById("prev")
const next = document.getElementById("next")

fetch(DATA_FOR_WEBRING)
  .then((response) => response.json())
  .then((sites) => {
    prev.href += "&name=" + name;
    next.href += "&name=" + name;
  });
