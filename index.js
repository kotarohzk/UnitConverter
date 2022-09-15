const numInput = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const lengthPara = document.getElementById("length-para")
const volumePara = document.getElementById("volume-para")
const massPara = document.getElementById("mass-para")

numInput.addEventListener("input", function() {
	if (isNaN(numInput.value) === true) {
		numInput.style.border = "5px solid #FB7185"
	}
	else {
		numInput.style.border = "5px solid #B295FF"
	}
})

convertBtn.addEventListener("click", function() {
	const value = numInput.value
	if (isNaN(value) === false && parseInt(value) !== 0) {
		lengthPara.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`
		volumePara.textContent = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`
		massPara.textContent = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`
	}
})
