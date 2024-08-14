//Array of valid answers
let answers = [
    'paper',
    'scissors',
    'rock'
]

let results = [
    
]


//Ask user what answer they want to choose
function gameTime() {
alert ("Let's play paper, scissors, rock! Best out of three?")
let userName = prompt ('What is your name?')




// create variables and initial values before being changed further in the code
let roundNumber = 1
let userAnswer = ''
let computerAnswer = ''
let computerWin = 0
let userWin = 0
// counting round numbers. Game ends after 3 rounds
while (roundNumber <= 3){
    let userAnswer = prompt ('paper, scissors, rock! Choose your answer wisely')
    // convert any answers with capital letters to lowercase letters
    userAnswer = userAnswer.toLowerCase()
    //taking any spaces on the start or end of answers
    userAnswer = userAnswer.trim()

  
// checks if users answer is valid and in the array. Outputs message based on whether the answer is valid or invalid
let index = Math.floor (Math.random()*3)
let computerAnswer = answers[index]
if (answers.includes(userAnswer)){
    alert('My answer is ' + computerAnswer)
   } else {
    alert ('That is and invalaid answer. Try again with paper, scissors, or rock')
    roundNumber = roundNumber - 1
   }
    
// compares the answers of each round and outputs who the winner of the round is
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
     alert('to bad so sad')
     computerWin = computerWin + 1
    } 
    roundNumber = roundNumber + 1
}

// compares points and outputs message and score based on who won

if (userWin > computerWin){
    alert('Congratulations! You won. ' + userWin + ':' + computerWin)
    results.push (' winner:' + userName)
    
} else if (userWin < computerWin){
    alert ('Haha. You lose. ' + userWin + ':' + computerWin)
    results.push (' winner:computer') 
} else {
    alert('Its a tie. Try again? ' + userWin + ':' + computerWin)
    results.push (' draw') 
}

}

 
 function Leaderboard() {
  
    alert (results)
 }


