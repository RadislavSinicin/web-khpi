const BUTTON_SELECTOR = "data-name";
const LABEL_SELECTOR = "data-info";
const PICTURE_SELECTOR = "data-picture";

function setUp() {
    let shapeButtons = document.querySelectorAll(`[${BUTTON_SELECTOR}]`);
    shapeButtons.forEach(button => {
        button.addEventListener('click', (evt) => {
            let buttonName = evt.target.dataset.name;
            incrementClickCount(buttonName);
            drawShape(buttonName);
        });
    });
    let shapeLabels  = document.querySelectorAll(`[${LABEL_SELECTOR}]`);
    shapeLabels.forEach(label => {
        let shapeName = label.attributes.getNamedItem(LABEL_SELECTOR).value;
        let clickCountOfShape = getClickCount(shapeName);
        label.innerHTML = `Кількість натискань: ${clickCountOfShape}`;
    });
    let shapes = document.querySelectorAll(`[${PICTURE_SELECTOR}]`);
    shapes.forEach(shape => {
        shape.style.display = "none";
    });
}

setUp();

function incrementClickCount(name) {
    let count = getClickCount(name);
    localStorage.setItem(name, ++count);
    let label = document.querySelector(`[${LABEL_SELECTOR}=${name}]`);
    label.innerHTML = `Кількість натискань: ${count}`;
}

function getClickCount(name) {
    let count = localStorage.getItem(name);
    if(count === null) {
        count = 0;
    }
    return count;
}

function drawShape(shapeName) {
    let figures = document.querySelectorAll(`[${PICTURE_SELECTOR}]`);
    figures.forEach(figure => {
        if(figure.attributes.getNamedItem(PICTURE_SELECTOR).value === shapeName) {
            figure.style.display = "block";
        } else {
            figure.style.display = "none";
        }
    });
}