const quizData = [
    {
        question: 'Mình bao nhiêu tuổi?',
        a: '10',
        b: '20',
        c: '26',
        d: '30',
        correct: 'c'
    },
    {
        question: 'What is the most popular programming languague in 2020?',
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'PHP',
        correct: 'b'
    },
    {
        question: 'What is my favorite color?',
        a: 'Black',
        b: 'Pink',
        c: 'Red',
        d: 'Blue',
        correct: 'a'
    }
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.querySelector('button');
const inputBtns = document.querySelectorAll('input[type="radio"]');
let currentQuestion = 0;
let point = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}
function getSelected() {

    let answer = undefined;
    inputBtns.forEach(inputBtn => {
        if(inputBtn.checked) {
            answer = inputBtn.id;
        }
    });
    return answer;
}

function setDefault() {
    inputBtns.forEach(inputBtn => {
        inputBtn.checked = false;
    })
}


submitBtn.addEventListener('click', () => {
    const currentQuizData = quizData[currentQuestion];
    const answer = getSelected();
    
    currentQuestion++;

    if (answer === currentQuizData.correct) {
        point++;
    }

    if(answer) {
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert(`You have answered ${point} questions correctly`)
            currentQuestion = 0;
            point = 0;
            loadQuiz();
        }
    }

    setDefault();
})