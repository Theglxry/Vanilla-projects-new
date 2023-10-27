// elements selection
'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


//BEST PRACTICE FOR DISPLAYING THE MODAL 

  const openModal = function () {
    // removing the hidden class
    modal.classList.remove('hidden'); ////this is a better practice than writing modal.style.display='block';
    // showing the overlay
    overLay.classList.remove('hidden');
  };

 
  //BEST PRACTICE FOR CLOSING THE MODAL
  const closeModal = function () {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
  };
  

// USING THE ESC KEY TO CLOSE MODAL / LISTEN FOR KEYBOARD EVENT  


// display each modal
  for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal)
 

//closing modal onclick
  btnCloseModal.addEventListener('click', closeModal);
  overLay.addEventListener('click', closeModal);















//______________CLOSING THE MODAL_____________________
/*
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden'); 
    overLay.classList.add('hidden')
})
*/

//____________USING OVERLAY TO CLOSE MODAL______________
/*
overLay.addEventListener('click' , function () {
    modal.classList.add('hidden'); 
    overLay.classList.add('hidden')
    
})
 */






