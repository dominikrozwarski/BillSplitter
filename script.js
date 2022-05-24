const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showBill = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'complete all fields';
		costInfo.style.display = 'none';
		//checking if all the fields are filled
	} else {
		error.textContent = '';
		countBill();
		//if everythink is completed program will calculate value of bill + tip and how much we have to pay per person
	}
};

const countBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);
	const sum = (newPrice + newPrice * newTip) / newPeople;

	costInfo.style.display = 'block';
	cost.textContent = sum.toFixed(2);
	//displaying value
};

countBtn.addEventListener('click', showBill);
