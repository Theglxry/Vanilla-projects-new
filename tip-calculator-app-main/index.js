function getTips(tipPercentage) {
  const billAmount = parseFloat(document.getElementById("amount-input").value);
  console.log("Custom Tip:", customTip);

  const numberOfPeople = parseFloat(
    document.getElementById("people-count").value
  );

  // all logic
  const percentageValue = (tipPercentage / 100) * billAmount;

  const totalBillAmount = billAmount + percentageValue;

  const tipAmountPerPerson = percentageValue / numberOfPeople;

  const totalAmountPerPerson = totalBillAmount / numberOfPeople;

 


  const tipAmountElement = document.getElementById("tip-amount");
  tipAmountElement.textContent = `$${tipAmountPerPerson.toFixed(2)}`;

  const totalBillElement = document.getElementById("total-bill");
  totalBillElement.textContent = `$${totalAmountPerPerson.toFixed(2)}`;



  if (billAmount === 0 ) {
      document.getElementById("invalid-figure").style.opacity = 1;
      console.log("Bill amount is zero"); // Debug line

      document.getElementById('amount-input').style.borderColor = 'red'; 
  }

  if (numberOfPeople === 0) {
    document.getElementById('invalid-people').style.opacity = 1;
    document.getElementById('people-count').style.borderColor = 'red'; 

  }

}

// for custom input
const customTip = parseFloat(document.getElementById("custom-input"));

customTip.addEventListener('input',() => {

    
})


//   reset function
document.querySelector("#reset").addEventListener("click", function () {
//   document.querySelector('.reset').style.backgroundColor = 'hsl(183, 100%, 15%)'
  document.getElementById("tip-amount").textContent = `$0.00`;
  document.getElementById("total-bill").textContent = `$0.00`;
  document.getElementById("amount-input").value = "";
  document.getElementById("custom-input").value = "";
  document.getElementById("people-count").value = "";
});
