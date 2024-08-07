//Array of answers
let answers = [
    'paper',
    'scissors',
    'rock'
]

//Ask user what answer they want to choose
function gameTime() {
alert ("Let's play paper, scissors, rock! Best out of three?")


let roundNumber = 1
let userAnswer = ''
let computerAnswer = ''
let computerWin = ''
let userWin = ''
while (roundNumber <= 3){
    let userAnswer = prompt ('paper, scissors, rock! Choose your answer wisely')
    userAnswer = userAnswer.toLowerCase()

let index = Math.floor (Math.random()*3)
let computerAnswer = answers[index]

    alert('My answer is ' + computerAnswer)

    if(userAnswer == computerAnswer){
        alert('Its a tie!')
    } else if (userAnswer == 'scissors' && computerAnswer == 'paper'||
              userAnswer == 'rock' && computerAnswer == 'scissors' ||
               userAnswer == 'paper' && computerAnswer == 'rock'){
     alert('You win!')
     userWin = userWin + 1
    } else if (userAnswer == 'scissors' && computerAnswer == 'rock'||
              userAnswer == 'rock' && computerAnswer == 'paper'||
              userAnswer == 'paper' && computerAnswer == 'scissors'){
     alert('You lose!')
     computerWin = computerWin + 1
    }
    roundNumber = roundNumber + 1
}

if (userWin > computerWin){
    alert('Congrajulations! You won.')
} else if (userWin < computerWin){
    alert ('Haha. You lose.')
} else {
    alert('Its a tie. Try again? ')
}
 }





