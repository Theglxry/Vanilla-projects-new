"use strict";

const spacingRange = document.querySelector("#spacing");
const blurRange = document.querySelector("#blur");
const image = document.getElementsByTagName("img")[0]; //selects the first img found

function imageStyling(el) {
  const rangeTarget = el.target;
  const rangeValue = el.target.value;

  if (rangeTarget.id === "spacing") {
    image.style.padding = rangeValue + "px";
  } else if (rangeTarget.id === "blur") {
    image.style.filter = `blur(${rangeValue}px)`;
  }
}
false;

spacingRange.addEventListener("input", imageStyling);
blurRange.addEventListener("input", imageStyling);
