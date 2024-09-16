'use strict'
let rand_num1 = 0
let rand_num2 = 0
let correctAnswers = 0  // Muuttuja oikeiden vastausten laskemiseen
let incorrectAnswers = 0 // Muuttuja väärien vastausten laskemiseen

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange (1,10)
    rand_num2 = getRandomIntNumberInRange (1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

// Funktio päivittää oikeiden ja väärien vastausten lukumäärät käyttöliittymään
const updateScoreboard = () => {
    document.querySelector('#correct').innerHTML = correctAnswers
    document.querySelector('#incorrect').innerHTML = incorrectAnswers
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers ()
});

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!')
        correctAnswers++ // Kasvatetaan oikeiden vastausten määrää
    } else {
        alert('Incorrect!')
        incorrectAnswers++ // Kasvatetaan väärien vastausten määrää
    }

    // Päivitetään tulokset käyttöliittymään
    updateScoreboard();
    
    // Arvotaan uusi lasku ja tyhjennetään syötekenttä
    randomizeNumbers()
    document.querySelector('input').value=''
})
