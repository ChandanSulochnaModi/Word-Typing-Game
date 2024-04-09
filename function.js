window.addEventListener('load', init);

// Globals:

// Available Levels
const levels={
    easy:5,
    medium:3,
    hard:2
}
// To change level
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements:
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'Animal',
    'Breathe',
    'Castle',
    'Doctor',
    'Engine',
    'Family',
    'Garden',
    'Health',
    'Insect',
    'Jacket',
    'Kindly',
    'Laptop',
    'Mother',
    'Nature',
    'Online',
    'Planet',
    'Quaint',
    'Rocket',
    'Sunset',
    'Tunnel',
    'Unique',
    'Vision',
    'Window',
    'Yellow',
    'Zipper',
    'Bottle',
    'Camera',
    'Desert',
    'Energy',
    'Future',
    'Ubiquitous',
    'Inexorable',
    'Quixotic',
    'Obfuscate',
    'Ebullient',
    'Sagacious',
    'Perfidious',
    'Esoteric',
    'Vicissitude',
    'Mellifluous',
    'Intransigent',
    'Penultimate',
    'Querulous',
    'Exacerbate',
    'Nebulous',
    'Machiavellian',
    'Perspicacious',
    'Pernicious',
    'Recalcitrant',
    'Serendipity'
];

// Initialize Game
function init() {
    //Show number of seconds in UI
seconds.innerHTML=currentLevel;
  // Load word from Array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call coundown every second
  setInterval(countdown,1000);
  // Check game status
  setInterval(checkStatus, 50);
}
// start match
function startMatch(){
    if(matchWords()){   
    isPlaying=true;
    time=currentLevel+1;
    showWord(words);
    wordInput.value='';
    score++;
        }
        scoreDisplay.innerHTML = score;
    }

// Match currentword to wordInput
function matchWords(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML='Correct!!!';
        return true;
    }   else{
        message.innerHTML='';
        return false;
    }
}

//pick and show random word:
function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}

/// Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement time
        time--;
    } else if (time === 0) {
        // Game is over, stop playing
        isPlaying = false;
        // Reset time
        time = currentLevel; // Reset to the currentLevel value
        // Show time
        timeDisplay.innerHTML = time;
        // Show a new word
        showWord(words);
    }
    // Show time
    timeDisplay.innerHTML = time;
}


// Check game status
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML='Game is Over!!!';
        score = -1;
    }
}
