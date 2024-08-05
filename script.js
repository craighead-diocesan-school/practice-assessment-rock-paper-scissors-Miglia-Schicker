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
while (roundNumber <= 3){
    let userAnswer = prompt ('paper, scissors, rock! Choose your answer wisely')

let index = Math.floor (Math.random()*3)
let computerAnswer = answers[index]

    alert('My answer is ' + computerAnswer)

    if(userAnswer == computerAnswer){
        alert('Its a tie!')
    } else if (userAnswer == 'scissors' && computerAnswer == 'paper'||
              userAnswer == 'rock' && computerAnswer == 'scissors' ||
               userAnswer == 'paper' && computerAnswer == 'rock'){
     alert('You win!')
    } else if (userAnswer == 'scissors' && computerAnswer == 'rock'||
              userAnswer == 'rock' && computerAnswer == 'paper'||
              userAnswer == 'paper' && computerAnswer == 'scissors'){
     alert('You lose!')
    }
    roundNumber = roundNumber + 1
}
 }





