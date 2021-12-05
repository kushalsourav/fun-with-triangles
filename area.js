const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const submitButton = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

function calculateArea() {

    const sum = (Number(value1.value) * Number(value2.value)) / 2;

    output.innerText = `The Area of Triangle is = ${sum}`
}

submitButton.addEventListener('click', calculateArea);