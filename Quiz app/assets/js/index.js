let quizData; // Declare quizData as a global variable

async function getQuizData() {
    const response = await fetch(
        'https://opentdb.com/api.php?amount=20&category=18'
    );
    const data = await response.json();
    quizData = data.results.filter((data) => data.type == "multiple"); 
    
    quizApp(); // Call quizApp function

}

function updateQuizUi(){

    document.getElementById('Tnumber').innerHTML = quizData.length - 1;
    document.getElementById('Qnumber').innerHTML = currentQuestion;
    let optionsList = getOptionList()
    question.innerHTML = quizData[currentQuestion].question;

    optionOne.innerHTML = optionsList[0];
    checkBoxa.value = optionsList[0]

    optionSecond.innerHTML = optionsList[1];
    checkBoxb.value = optionsList[1]

    optionThird.innerHTML = optionsList[2];
    checkBoxc.value = optionsList[2]

    optionFourth.innerHTML = optionsList[3];
    checkBoxd.value = optionsList[3]
}

const question = document.querySelector('#question');
const optionOne = document.querySelector('#a-text');
const checkBoxa = document.querySelector('#a');
const optionSecond = document.querySelector('#b-text');
const checkBoxb = document.querySelector('#b');
const optionThird = document.querySelector('#c-text');
const checkBoxc = document.querySelector('#c');
const optionFourth = document.querySelector('#d-text');
const checkBoxd = document.querySelector('#d');

const answers = document.querySelectorAll('.answer');

var currentQuestion = 1; // Initialize currentQuestion to 0

function getOptionList(){
    let correctAns = quizData[currentQuestion].correct_answer;
    let incorrectAns = quizData[currentQuestion].incorrect_answers;
    let optionsList = incorrectAns;
    optionsList.splice(
        Math.floor(Math.random() * (incorrectAns.length + 1)),
        0,
        correctAns
    );
    return optionsList;
}

function quizApp() {
    document.getElementById('Tnumber').innerHTML = quizData.length - 1;
    document.getElementById('Qnumber').innerHTML = currentQuestion;
    let optionsList = getOptionList()

    question.innerHTML = quizData[currentQuestion].question;
    optionOne.innerHTML = optionsList[0];
    checkBoxa.value = optionsList[0]

    optionSecond.innerHTML = optionsList[1];
    checkBoxb.value = optionsList[1]

    optionThird.innerHTML = optionsList[2];
    checkBoxc.value = optionsList[2]

    optionFourth.innerHTML = optionsList[3];
    checkBoxd.value = optionsList[3]
}

function clearChecked() {
    let radioEle = document.querySelectorAll('input[name="answer"]')
    for (var i = 0; i < radioEle.length; i++) {
        radioEle[i].checked = false;
    }

}

document.getElementById('submit').addEventListener('click', () => {
    if (!document.querySelector('input[name="answer"]:checked')) {
        // If no radio button is checked, prevent the click event from proceeding
        event.preventDefault();
        return;
    }
    checkInput();
    if (currentQuestion <  quizData.length - 1) { 
        currentQuestion++;
        quizApp(); // Call quizApp function
        clearChecked()
    } else {
        console.log('Final Score: ', score);
        endQuiz()

    }
});


var score = 0;
function checkInput() {
    // Get the value of the selected radio button
    const selectedOption = document.querySelector('input[name="answer"]:checked').value;
    console.log(selectedOption)

    // Compare the selected option to the correct answer
    if (selectedOption === quizData[currentQuestion].correct_answer) {
        score++;
    }
}

function endQuiz() {
    let mainContainer = document.querySelector('.quiz-container');
    mainContainer.innerHTML = '';
    let finalMessage = document.createElement('div');
    finalMessage.classList = "finalMessage";
    finalMessage.innerHTML = `Final Score : ${score}`
    mainContainer.append(finalMessage);

    let submitBtn =  document.getElementById('submit')
    submitBtn.innerText = "Play Again"
    submitBtn.addEventListener('click',()=> location.reload() )


}
getQuizData(); // Call getData function
