// dom elements form

const formEl = document.querySelector("form");
const inputFullNameEl = document.getElementById("full-name");
const inputKmEl = document.getElementById("km");
const selectAgeEl = document.getElementById("age");

// console.log(formEl, inputFullNameEl, inputKmEl, selectAgeEl);

// dom elements card

const passengerNameEl = document.querySelector(".passenger-name");
const offerEl = document.querySelector(".offer");
const railcarEl = document.querySelector(".railcar");
const codeEl = document.querySelector(".code");
const ticketPriceEl = document.querySelector(".ticket-price");

// console.log(passengerNameEl, offerEl, railcarEl, codeEl, ticketPriceEl);

// implementation
formEl.addEventListener("submit", function (e) {
  // prevent default behavior
  e.preventDefault();

  //   values
  const fullNameValue = inputFullNameEl.value;
  const kmValue = inputKmEl.value;
  const ageValue = selectAgeEl.value;
  let offerValue = offerEl.value;

  // console.log(fullNameValue, kmValue, ageValue);

  const pricePerKm = 0.21;
  let price = inputKmEl.value * pricePerKm;
  console.log(price.toFixed(2));
  offerValue = "Standard";

  if (ageValue === "minor") {
    const minorDiscount = 0.8;
    price = price * minorDiscount;
    offerValue = "Sconto 20% minorenni";
    console.log("Il tuo biglietto scontato del 20% costa " + price.toFixed(2));
  } else if (ageValue === "senior") {
    const seniorDiscount = 0.6;
    price = price * seniorDiscount;
    offerValue = "Sconto 40% over 65";
    console.log("Il tuo biglietto scontato del 40% costa " + price.toFixed(2));
  }

  //   update card
  passengerNameEl.innerText = fullNameValue;
  ticketPriceEl.innerText = price.toFixed(2);
  offerEl.innerText = offerValue;
});
