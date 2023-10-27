window.onload = () => {
    getRandomAdvice();
    checkOnlineStatus();
  };

  
  const offlineMessage = document.querySelector(".error");
  
  const checkOnlineStatus = () => {
    if (!navigator.onLine) {
      offlineMessage.style.display = "block";
      setTimeout(() => {
        offlineMessage.style.display = "none";
      }, 3000);
    } else {
      offlineMessage.style.display = "none";
    }
  }
  

  
  function displayAdvice(advice, id) {
    const adviceId = document.querySelector("p");
    const adviceQuote = document.querySelector("h2");
  
    adviceQuote.textContent = advice ? `"${advice}"` : "Channel your inner peace";
    adviceId.textContent = id ? `ADVICE # ${id}` : "Advice #01";
  }
  
  // Function that fetches and avoids repeated quotes
  const usedQuotes = new Set(); // Set to store used quote IDs
  

  const getRandomAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const id = result.slip.id;
  
        if (!usedQuotes.has(id)) {
          const advice = result.slip.advice;
          displayAdvice(advice, id);
          usedQuotes.add(id);
          console.log(usedQuotes);
        } else {
          // If it's a repeated quote, fetch another one
          getRandomAdvice();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  


  const icon = document.getElementById("die");
  icon.addEventListener("click", function () {
    icon.classList.toggle("rotate");
    getRandomAdvice();
    checkOnlineStatus();
  });
  