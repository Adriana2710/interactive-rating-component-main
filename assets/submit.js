const card1 = document.querySelector("[data-card1]");
const card2 = document.querySelector("[data-card2]");
const buttonSubmit = document.querySelector("[data-submit]");
const rateButton = document.querySelectorAll("[data-rate]");
let result = document.querySelector("[data-result]");


rateButton.forEach(function(elemento){
 elemento.onclick = function(e) {
    result.textContent = e.target.textContent;
 }
})


buttonSubmit.onclick = function() {
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
};
