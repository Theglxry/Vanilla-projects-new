// ELEMENTS SELECTIONS
"use strict";
const btnList = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const btnSelected = document.getElementById("#btn");
const selected = document.querySelector(".selected");
let selectedRating;
 



// FUNCTIONALITY
submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (!selectedRating) {
    return alert("Please rate us!");  //using return here is called short circuit . it immediately stops the code when there's no input 
  }

//   if (selectedRating < 4){
//      alert("what can we do to serve you better ?😭")
//   }
  // swaping contents
  const rating = document.querySelector(".rating-container");
  const thankYouCard = document.querySelector(".thankyou-section");
  const ratingSpan = document.querySelector("#selected-rating");

  ratingSpan.innerHTML = selectedRating;

  thankYouCard.classList.remove("display-none");
  rating.classList.add("display-none");
});



btnList.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    const clickedButton = e.target;

    selectedRating = clickedButton.innerHTML;
    // console.log(selectedRating);
    btns.classList.toggle("btn-focus");
  });
});

 

 
