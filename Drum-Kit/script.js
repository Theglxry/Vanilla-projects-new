"use strict";

// A function that plays audio 
function playAudio(e) {
    e.preventDefault();
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;  
  
    key.classList.add("playing");
    audio.currentTime = 0; //rewind to the start
    audio.play();  
}



// A function that removed active class
function removeAudio(e) {
    e.preventDefault()

    if (e.propertyName !== 'transform') return; //doesnt apply
    this.classList.remove('playing')
}




// A both functions on the each of the key
const keys = document.querySelectorAll('.key');
keys.forEach(btn => {
    btn.addEventListener('transitionend', removeAudio)
    window.addEventListener('keydown', playAudio)
});
 





 
