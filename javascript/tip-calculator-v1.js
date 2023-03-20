// QUERY SELECTORS
class TipCalculator {
  constructor() {
    this.billAmountEl = document.querySelector("#bill-amount");
    this.noOfPeopleEl = document.querySelector("#no-of-people");
    this.tipBtns = document.querySelectorAll(".tip-btn");
    this.customBtn = document.querySelector(".custom-btn");
    this.computedBoxAmount = document.querySelector("#computed-box--amount");
    this.computedBoxTip = document.querySelector("#computed-box--tip");
    this.computedBoxAmount = document.querySelector("#computed-box--amount");
    this.resetBtn = document.querySelector(".reset-btn");
  }

  calculateBill(billAmount, tip, noOfPeople) {
    const totalTip = billAmount * (tip / 100);
    const totalBill = billAmount + totalTip;

    const tipPerPerson = totalTip / noOfPeople;
    const amountPerPerson = totalBill / noOfPeople;

    this.computedBoxTip.textContent = `$${tipPerPerson.toFixed(2)}`;
    this.computedBoxAmount.textContent = `$${amountPerPerson.toFixed(2)}`;
  }
}

function defaultSetting() {
  (billAmount = 0), (tip = 0), (noOfPeople = 0);

  tipCalculator.billAmountEl.value = "";
  tipCalculator.noOfPeopleEl.value = "";
  tipCalculator.customBtn.value = "";

  tipCalculator.computedBoxTip.textContent = `$0.00`;
  tipCalculator.computedBoxAmount.textContent = `$0.00`;
}

const tipCalculator = new TipCalculator();

let billAmount,
  tip,
  noOfPeople = 0;

// EVENT LISTINNERS
tipCalculator.billAmountEl.addEventListener("input", function (e) {
  const billAmountElValue = Number.parseFloat(e.target.value);
  if (billAmountElValue > 0) {
    billAmount = billAmountElValue;
  }
});

tipCalculator.tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener("click", (e) => {
    tip = Number.parseInt(e.target.dataset.id);
  });
});

tipCalculator.customBtn.addEventListener("input", function (e) {
  const tipElValue = Number.parseInt(e.target.value);
  if (tipElValue > 0) {
    tip = tipElValue;
  }
});

tipCalculator.noOfPeopleEl.addEventListener("input", function (e) {
  const noOfPeopleElValue = Number.parseInt(e.target.value);

  if (noOfPeopleElValue > 0) {
    noOfPeople = noOfPeopleElValue;
  }

  billAmount &&
    tip &&
    noOfPeople &&
    tipCalculator.calculateBill(billAmount, tip, noOfPeople);
});

tipCalculator.resetBtn.addEventListener("click", defaultSetting);
