const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const errorInfo = document.querySelector(".error");
const finalCost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");

const checkValue = () => {
    if (price.value == "" && people.value == "" && tip.value == 0) {
        errorInfo.innerText = "Uzupełnij pola formularza"
        costInfo.style.display = "none"
    } else {
        errorInfo.innerText = ""
        calculateBill()
    }
}

const calculateBill = () => {
    const priceValue = parseFloat(price.value)
    const numberOfPeople = parseInt(people.value)
    const tipValue = parseFloat(tip.value)
    const sum = (priceValue + (priceValue * tipValue)) / numberOfPeople
    costInfo.style.display = "block"
    finalCost.innerText = sum.toFixed(2)
}

countBtn.addEventListener("click", checkValue)