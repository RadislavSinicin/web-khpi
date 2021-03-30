const INIT_INPUTS_SIZE = 3;

function setUp() {
    for (let i = 0; i < INIT_INPUTS_SIZE; ++i) {
        addNewInputElement();
    }
    let buttonAdd = document.getElementById("btn-add");
    buttonAdd.className = 'btn-add';
    buttonAdd.addEventListener("click", (evt) => {
        addNewInputElement();
    });
}

setUp();

function addNewInputElement() {
    let allInputs = getAllInputs();
    let inputsCount = allInputs.children.length;
    let nextInputNumber = ++inputsCount;

    let inputElement = document.createElement("div");
    inputElement.setAttribute("data-index", nextInputNumber);

    let input = document.createElement("input");
    input.className = "input-element";
    attachListenerOnInput(input);
    let buttonDelete = createDeleteButton(nextInputNumber);

    inputElement.appendChild(input);
    inputElement.appendChild(buttonDelete);

    allInputs.appendChild(inputElement);
}

function createDeleteButton(indexValue) {
    let buttonDelete = document.createElement("button");
    buttonDelete.className = 'btn-delete';
    buttonDelete.innerHTML = 'x';
    buttonDelete.setAttribute("data-index", indexValue);
    buttonDelete.addEventListener("click", (evt) => {
        let inputNumber = evt.target.dataset.index;
        console.log(evt.target);
        console.log(inputNumber);
        let inputToRemove = document.querySelector(`[data-index='${inputNumber}']`);
        console.log(inputToRemove);
        getAllInputs().removeChild(inputToRemove);
        countSum();
    });
    return buttonDelete;
}

function getAllInputs() {
    return document.getElementById("elements-holder");
}

function attachListenerOnInput(inputElement) {
    inputElement.addEventListener('input', () => {
        countSum();
    });
}

function countSum() {
    let sum = 0;
    let inputElements = document.getElementsByTagName("input");
    for (let inputElement of inputElements) {
        let numberValue = inputElement.value;
        if (isDigit(numberValue)) {
            console.log(numberValue);
            sum += parseInt(numberValue);
        }
    }
    printSum(sum);
}

function isDigit(numberValue) {
    return !isNaN(numberValue) && numberValue !== '';
}

function printSum(sum) {
    let sumLabel = document.getElementById("sum-label");
    sumLabel.innerHTML = `Загальна сумма: ${sum}`;
}