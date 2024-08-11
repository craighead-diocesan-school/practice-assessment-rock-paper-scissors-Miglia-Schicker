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
let computerWin = 0
let userWin = 0
while (roundNumber <= 3){
    let userAnswer = prompt ('paper, scissors, rock! Choose your answer wisely')
    userAnswer = userAnswer.toLowerCase()

  

let index = Math.floor (Math.random()*3)
let computerAnswer = answers[index]
if (answers.includes(userAnswer)){
    alert('My answer is ' + computerAnswer)
   } else {
    alert ('That is and invalaid answer. Try again with paper, scissors, or rock')
   }
    

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
    alert('Congratulations! You won. ' + userWin + ':' + computerWin)
} else if (userWin < computerWin){
    alert ('Haha. You lose. ' + userWin + ':' + computerWin)
} else {
    alert('Its a tie. Try again? ' + userWin + ':' + computerWin)
}
 }





