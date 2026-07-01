// getElementById finds one element whose attribute matches the string exactly
const gameTitle = document.getElementById("game-title");
const scoreDisplay = document.getElementById("score");
// select #question-number  → store in questionNumber
const questionNumber = document.getElementById("question-number");

// select #question-text    → store in questionText
const questionText = document.getElementById("question-text");
// select #question-card    → store in questionCard
const questionCard = document.getElementById("question-card");
// select #answer-list      → store in answerList
const answerList = document.getElementById("answer-list");
// select #next-btn         → store in nextBtn
const nextBtn = document.getElementById("next-btn");
// select #end-screen       → store in endScreen
const endScreen = document.getElementById("end-screen");

//getElementsByClassName finds all the elements with that class name and returns an html collection
const answerBtnsCollection = document.getElementsByClassName("answer-btn");
// select ".answer-btn" using querySelectorAll → store in answerBtnsNodeList

//querySelectorAll finds all elements mathching a css selector and returns a node list
const answerBtnsNodeList = document.querySelectorAll(".answer-btn");

console.log(answerBtnsCollection);
console.log(answerBtnsNodeList);

const btnsArray = Array.from(answerBtnsNodeList)
//getElementsByClassName returns an htmlcollection.
// querySelectorAll returns a node list.
// To use .map() on either, convert with convert with Array.from() or spread syntax [...].


