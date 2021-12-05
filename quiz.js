const quizform = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');

const correctAnswers = ['90°', 'right angled', "Equilateral triangle", "no"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizform);
    for (let value of formResults.values()) {
        console.log(value);
        if (value === correctAnswers[index]) {
            score = score + 1;
            console.log(score);
        }
        index = index + 1;
    }
    output.innerText = "your score is " + score;

}


submitBtn.addEventListener('click', calculateScore)