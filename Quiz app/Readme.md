# Quiz App
This is a simple quiz application that uses the Open Trivia Database (OpenTDB) API to retrieve multiple choice questions and displays them to the user. The user can then select an answer and submit their response. The code keeps track of the user's score and displays it at the end of the quiz.

# Getting Started
To get started with this code, follow these steps:

1. Clone this repository to your local machine.

2. Open the `index.html` file in your web browser to launch the quiz app.

3. Answer the multiple choice questions and submit your responses.

4. Your score will be displayed at the end of the quiz.


# How it works
The code uses several functions to manage the quiz:

 `getQuizData`: This function makes an API call to OpenTDB to retrieve multiple choice quiz questions and stores them in a global variable called quizData.

`updateQuizUi`: This function updates the HTML elements on the page with the current quiz question and answer choices.
 
`getOptionList`: This function generates a list of answer options for the current question by shuffling the correct answer and incorrect answers.
 
`quizAp`: This function calls getOptionList and updateQuizUi to initialize the quiz.
 
`clearChecked`: This function clears any previously selected answer choices when the user moves on to the next question.
 
`checkInput`: This function compares the user's selected answer to the correct answer and increments the score if the user's answer is correct.
 
`endQuiz`: This function is called when the user has answered all the questions. It displays the user's final score and allows them to restart the quiz.

There is also an event listener on the submit button that handles the user's answer submission and advances the quiz to the next question. If there are no more questions, the `endQuiz` function is called.

# Dependencies
This code uses the following dependencies:

[OpenTDB API](https://opentdb.com/api_config.php): This API provides access to a database of multiple choice quiz questions.

# License
This code is released under the MIT License.

# Author
This code was written by [Priyanshu Mishra](https://github.com/priyanshum003).
