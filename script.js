//Array of answers
let answers = [
    'Paper',
    'Scissors',
    'Rock'
]

//Ask user what answer they want to choose
function userAttempt() {
let userAnswer = prompt ('Paper, scissors, rock! Choose your answer wisely')
}


function computerAnswer(){

    let index = Math.floor (Math.random()*3)

    alert(answers[index])
}


