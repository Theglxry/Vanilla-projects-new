'use strict';
window.addEventListener(
    "DOMContentLoaded",
    () => {
      // set interval time to keep executing callback every '1000ms' (1sec)
      setInterval(() => {
        // dates methods
        const realTime = new Date();

        document.querySelector(".hour").style.transform = `rotate(${
          30 * realTime.getHours()
        }deg)`; //30 * 12hrs to rotate back 360deg;
        document.querySelector(".minute").style.transform = `rotate(${
          6 * realTime.getMinutes()
        }deg)`;
        document.querySelector(".seconds").style.transform = `rotate(${
          6 * realTime.getSeconds()
        }deg)`;
      });
    },
    1000
  );






















// const hour = realTime.getHours();
// const minutes = realTime.getMinutes();
// const seconds = realTime.getSeconds();

// document.querySelector('.hour').style.transform = `rotate(${30 * hour}deg)`;//30 * 12hrs to rotate back 360deg;
// document.querySelector('.minute').style.transform = `rotate(${6 * minutes}deg)`;
// document.querySelector('.seconds').style.transform = `rotate(${6 * seconds}deg)`;