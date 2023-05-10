
let currentNumber = '';
let firstNumber = '';
let operation = '';


function clearScreen() {
	currentNumber = '';
	firstNumber = '';
	operation = '';
	updateScreen('');
}

function backspace() {
	currentNumber = currentNumber.slice(0, -1);
	updateScreen(currentNumber);
}
function addSymbol(symbol) {
	currentNumber = symbol;
	updateScreen(currentNumber);
}


function calculate() {
	let result = '';
	switch (operation) {
		case '+':
			result = parseFloat(firstNumber) + parseFloat(currentNumber);
			break;
		case '-':
			result = parseFloat(firstNumber) - parseFloat(currentNumber);
			break;
		case '*':
			result = parseFloat(firstNumber) * parseFloat(currentNumber);
			break;
		case '/':
			result = parseFloat(firstNumber) / parseFloat(currentNumber);
			break;
		case '%':
			result = parseFloat(currentNumber) / 100;
			break;
		case 'sqrt':
			result = Math.sqrt(parseFloat(currentNumber));
			break;
		case 'square':
			result = parseFloat(currentNumber) * parseFloat(currentNumber);
			break;
		default:
			break;
	}
	currentNumber = result.toString();
	firstNumber = '';
	operation = '';
	updateScreen(result);
}

function updateScreen(displayValue) {
	const screen = document.querySelector('.screen');
	screen.textContent = displayValue;
}


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const symbol = button.textContent;
		if (symbol >= '0' && symbol <= '9') {
			addSymbol(symbol);
		} else if (symbol === '.') {
			if (!currentNumber.includes('.')) {
				addSymbol(symbol);
			}
		} else if (symbol === 'C') {
			clearScreen();
		} else if (symbol === '<') {
			backspace();
		} else if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
			if (operation === '') {
				firstNumber = currentNumber;
				currentNumber = '';
				operation = symbol;
			} else {
				calculate();
				firstNumber = currentNumber;
				currentNumber = '';
				operation = symbol;
			}
		} else if (symbol === '=') {
			calculate();
		} else if (symbol === '%') {
			operation = '%';
			calculate();
		} else if (symbol === 'sqrt') {
			operation = 'sqrt';
			calculate();
		} else if (symbol === 'square') {
			operation = 'square';
			calculate();
		}
	});
});
