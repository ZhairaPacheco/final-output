const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll("#imgs img");
const submitBtn = document.getElementById("submit");

let index = 0;
let interval = setInterval(run, 5000);

function run () {
	
	changeImage ();
}

function changeImage () {
	if(index > img.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = img.length - 1;
	}
	
	imgs.style.transform = `translateX(${-index*500}px)`;	
}

function resetInterval() {
	clearInterval();
	interval = setInterval(run, 5000);
}

rightBtn.addEventListener('click', ()=>{
	index++;
	changeImage ();
	resetInterval();
});

leftBtn.addEventListener('click', ()=>{
	index--;
	changeImage ();
	resetInterval();
});

submitBtn.addEventListener("click", (e) => {
    checkAllInputs();
});

function checkAllInputs() {
    var inputElements = document.getElementsByClassName("edit");
    var allInputsHaveValue = true;
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value.trim() === "") {
            allInputsHaveValue = false;
            break;
        }
    }
    if (allInputsHaveValue) {
        alert("Your Reservation Form has been recorded.");
	} else {
        alert("Some inputs are empty. Please fill out all fields.");
        }
}

// Get all radio buttons and number input fields
    var radioButtons = document.querySelectorAll('input[name="amount"]');
    var numInputs = document.querySelectorAll('.num');
    
    // Attach event listeners to radio buttons and number inputs
    radioButtons.forEach(function(radio) {
        radio.addEventListener('change', updateTotal);
    });

    numInputs.forEach(function(input) {
        input.addEventListener('input', updateTotal);
    });

    // Function to update the total based on selected radio button and number of nights
    function updateTotal() {
        var selectedRadio = document.querySelector('input[name="amount"]:checked');
        var totalSpan = document.getElementById('totalAmount');

        if (selectedRadio) {
            var pricePerNight = parseInt(selectedRadio.getAttribute('data-price'));
            var numNights = 0;

            numInputs.forEach(function(input) {
                numNights += parseInt(input.value) || 0;
            });

            var totalAmount = pricePerNight * numNights;
            totalSpan.textContent = 'PHP ' + totalAmount.toFixed(2);
        } else {
            totalSpan.textContent = 'PHP 0.00';
        }
    }