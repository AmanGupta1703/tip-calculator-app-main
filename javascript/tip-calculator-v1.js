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

const tipCalculator = new TipCalculator();

let billAmount,
  tip,
  noOfPeople = 0;

// EVENT LISTINNERS
tipCalculator.billAmountEl.addEventListener("input", function (e) {
  billAmount = e.target.value ? Number.parseFloat(e.target.value) : 0;
});

tipCalculator.tipBtns.forEach((tipBtn) => {
  tipBtn.addEventListener("click", (e) => {
    tip = Number.parseInt(e.target.dataset.id);
  });
});

tipCalculator.customBtn.addEventListener("input", function (e) {
  tip = e.target.value ? Number.parseInt(e.target.value) : 0;
});

tipCalculator.noOfPeopleEl.addEventListener("input", function (e) {
  noOfPeople = e.target.value ? Number.parseInt(e.target.value) : 0;
  tipCalculator.calculateBill(billAmount, tip, noOfPeople);
});
