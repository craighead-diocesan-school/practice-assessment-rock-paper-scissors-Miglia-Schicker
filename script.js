let answers = [
    'Paper',
    'Scissors',
    'Rock'
]

function gameAnswers(){
  let userAnswer = prompt ('Paper, scissors, rock! Choose wisely...')
}

function computerAnswer(){

    let index = Math.floor (Math.random()*3)

    alert(answers[index])
}