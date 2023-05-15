const questions = [
    {
        question: 'Espero que ___________ una buena fiesta.',
        correctAnswer: 'haya'
    },
    {
        question: 'Espero que ____________ suficiente comida para todos',
        correctAnswer: 'haya'
    },
    {
        question: 'La casa de Ana está ___________ en el siguiente barrio',
        correctAnswer: 'allá'
    },
    {
        question: '___________en la distancia, se podía ver la silueta de la montaña',
        correctAnswer: 'allá'
    },
    {
        question: 'Mi papá me dijo que lo ___________ hecho correctamente.',
        correctAnswer: 'haya'
    },
    {
        question: 'La biblioteca se______en el centro del campus universitario.',
        correctAnswer: 'halla'
    },
    {
        question: 'No puedo creer que lo ___________ ganado.',
        correctAnswer: 'haya'
    },
    {
        question: 'El museo se___________en el corazón de la ciudad, rodeado de edificios históricos.',
        correctAnswer: 'halla'
    }
];

let currentQuestion = 0;

const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const messageDiv = document.querySelector('.message');
const message = document.getElementById('message');

function checkAnswer() {
    const answer = answerInput.value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestion].correctAnswer.toLowerCase();

    if (answer === correctAnswer) {
        message.textContent = '¡Respuesta correcta!';
        message.style.color = 'green';
    } else {
        message.textContent = `Lo siento, la respuesta correcta es "${correctAnswer}".`;
        message.style.color = 'red';
    }

    messageDiv.style.display = 'block';
    submitButton.disabled = true;
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % questions.length;

    const currentQuestionObj = questions[currentQuestion];

    document.getElementById('submit').setAttribute('data-correct', currentQuestionObj.correctAnswer);

    document.querySelector('.question p').textContent = currentQuestionObj.question;
    answerInput.value = '';
    messageDiv.style.display = 'none';
    submitButton.disabled = false;
    nextButton.disabled = true;
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);

nextQuestion();
