"use strict";
//init
document.addEventListener("DOMContentLoaded", init);

const elem = document.querySelector(".typewritten");
const text = elem.textContent;

function init() {
  elem.textContent = "";

  let count = 0;
  while (count < text.length) {
    (function(elem, text, count) {
      setTimeout(function() {
        elem.textContent += text[count];
      }, count * 200);
    })(elem, text, count);
    count++;
  }
}
