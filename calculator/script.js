const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.calc_buttons');
const display = calculator.querySelector('.calc_display');

const getKeyType = (key) => {
  const { action } = key.dataset;
  if (!action) return 'number';
  if (
    action === 'add' || action === 'subtract' ||
    action === 'multiply' || action === 'divide'
  ) return 'operator';
  return action;
}

const calculate = (x, op, y) => {
  const a = parseFloat(x);
  const b = parseFloat(y);

  if (op === 'add')  return a + b;
  if (op === 'subtract') return a - b;
  if (op === 'multiply') return a * b;
  if (op === 'divide') return a / b;
}

const updateCalculatorState = (key, calculator, resultString, displayedNum) => {
  const { firstValue, modValue, operator, previousKeyType } = calculator.dataset;
  const keyType = getKeyType(key);
  calculator.dataset.previousKeyType = keyType;
    
  Array
  .from(key.parentNode.children)
  .forEach(key => key.classList.remove('is-depressed'));

  if (keyType === 'operator') {
    key.classList.add('is-depressed');
    calculator.dataset.operator = key.dataset.action;
    calculator.dataset.firstValue = 
      firstValue && operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? resultString
      : displayedNum;
  }

  if (keyType === 'clear') {
    if (key.textContent === 'AC') {
      calculator.dataset.firstValue = '';
      calculator.dataset.modValue = '';
      calculator.dataset.operator = '';
      calculator.dataset.previousKeyType = '';
    } else {
      key.textContent = 'AC';
    } 
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = firstValue && previousKeyType === 'calculate' ? modValue : displayedNum;
  }

  if (keyType !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]');
    clearButton.textContent = 'CE';
  }

}

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent;
  const { firstValue, modValue, operator, previousKeyType } = state;
  const keyType = getKeyType(key);

  if (keyType === 'number') {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent;
  }

  if (keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.';
    if (
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) return '0.';
    return displayedNum;
  }

  if (keyType === 'operator') {
    return firstValue && operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum;
  }

  if (keyType === 'clear') return '0';

  if (keyType === 'calculate') {
    if (firstValue) {
      return previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum);
    } else {
      return displayedNum;
    }
  }
}

buttons.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const displayedNum = display.textContent;
    const resultString = createResultString(key, displayedNum, calculator.dataset);

    display.textContent = resultString;

    updateCalculatorState(key, calculator, resultString, displayedNum);
    }
  }
);