const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".toggle .circle");
const prices = document.querySelectorAll(".cards .card .price");
let annuallyPrice = [199.99, 249.99, 399.99];
let mounthlyPrice = [19.99, 24.99, 39.99];
let count = 0;
toggle.addEventListener("click", goToMonthlyOrAnnually);
document.addEventListener("keydown", goToMonthlyOrAnnually);
function goToMonthlyOrAnnually(a) {
  if (circle.style.transform === "translateX(0px)" || a.keyCode === 39) {
    circle.style.transform = "translateX(26px)";
    prices.forEach((price) => {
      price.innerHTML = `
            <span>&dollar;</span>${mounthlyPrice[count]}
          `;
      count++;
    });
    count = 0;
  } else if (circle.style.transform != "translateX(0px)" || a.keyCode === 37) {
    circle.style.transform = "translateX(0px)";
    prices.forEach((price) => {
      price.innerHTML = `
            <span>&dollar;</span>${annuallyPrice[count]}
          `;
      count++;
    });
    count = 0;
  }
}
