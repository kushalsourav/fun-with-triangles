const angle1 = document.querySelector('#angle-1');
const angle2 = document.querySelector('#angle-2');
const angle3 = document.querySelector('#angle-3');

const checkButton = document.querySelector("#isTriangle");
const output = document.querySelector('#output');

function calculateAngel() {
    const sum = Number(angle1.value) + Number(angle3.value) + Number(angle2.value);
    isTriangle(sum);
}

function isTriangle(sum) {
    if (sum === 180) {
        output.innerText = "Yay, the angles form a triangle!";
    } else {
        output.innerText = "Oh Oh! The angle doesn't form a triangle";
    }
}
checkButton.addEventListener('click', calculateAngel);