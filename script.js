//Array of answers
let answers = [
    'paper',
    'scissors',
    'rock'
]

//Ask user what answer they want to choose
function userAttempt() {
let userAnswer = prompt ('paper, scissors, rock! Choose your answer wisely')

let index = Math.floor (Math.random()*3)

    alert('My answer is ' + answers[index])
}





