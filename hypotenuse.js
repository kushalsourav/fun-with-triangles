const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const submitButton = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

function calculateHypotenuse() {
    let a = Number(value1.value);
    let b = Number(value2.value);
    const sum = Math.sqrt(a * a + b * b);
    output.innerText = `The Length of Hypotenuse is = ${sum}`
    console.log(sum);
}

submitButton.addEventListener('click', calculateHypotenuse);