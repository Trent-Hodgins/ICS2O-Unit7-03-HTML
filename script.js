// This line connects the "Calculate" button to //
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  // This line gets the user's input and converts it to an integer.//
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // This line checks if userInput is less than 0.//
  if (userInput >= 17) {
    document.getElementById('answer').innerHTML = 'You can see an R rated movie alone.'
  } else if (userInput >= 13) {
    document.getElementById('answer').innerHTML = 'You can see a PG-13 rated movie alone.'
  } else if (userInput >= 5) {
    document.getElementById('answer').innerHTML = 'You can see a PG rated movie alone.'
  } else {
    document.getElementById('answer').innerHTML = 'You are not old enough for any movie'
  }
}
