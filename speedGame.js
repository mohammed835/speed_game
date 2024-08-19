// set array 
let words = [
    'html',
    'css',
    'python',
    'javascript',
    'programming',
    'php',
    'html',
    'css',
    'python',
    'javascript',
    'programming',
    'php',
]
// levels of game
let lvls = {
    'easy' : 9,
    'normal' : 6 , 
    "hard" : 3
}

// dafault level
let dafaultLevelName = 'normal';
let dafaultLevelSeconds = lvls[dafaultLevelName];

// get all selectors 
let startButton = document.querySelector('.start');
let lvlNameSpan = document.querySelector('.message .lvl');
let secondsSpan = document.querySelector('.message .seconds');
let theWord = document.querySelector('.the-word');
let upcomingWords= document.querySelector('.upcoming-words');
let input = document.querySelector('.input');
let timeleftSpan= document.querySelector('.time span');
let scroeGot = document.querySelector('.score .got');
let scoretotel= document.querySelector('.score .total');
let finishMessage= document.querySelector('.finish');

// setting level name  & seconds & score
lvlNameSpan.innerHTML  = dafaultLevelName;
secondsSpan.innerHTML = dafaultLevelSeconds;
timeleftSpan.innerHTML = dafaultLevelSeconds;
scoretotel.innerHTML = words.length;

input.onpaste = function(e){
    return false ;
}

// strat game 
startButton.onclick = function(){
    startButton.remove();
    input.focus();
    // generate word function
    genwords();
}
function genwords(){
    // get random word from arr
    let randomWord = words[Math.floor(Math.random() * words.length)];

    // get random index 
    let wordIndex = words.indexOf(randomWord);

    // remove word from array
    words.splice(randomWord,1);

    // show the random word 
    theWord.innerHTML = randomWord;

    // empty up coming words 
    upcomingWords.innerHTML = '';

    // genrate words 
    for(let i = 0 ; i < words.length ; i++){
        // create div
        let div = document.createElement('div');
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }

    // call start play function
    startPlay();
}
function startPlay(){
    timeleftSpan.innerHTML = dafaultLevelSeconds;
    let start = setInterval(function(){
        timeleftSpan.innerHTML--;
        if (timeleftSpan.innerHTML ==0) {
            // clear 
            clearInterval(start);

            // compare words 
            if (theWord.innerHTML.toLowerCase() ==input.value.toLowerCase()){
                input.value = '';
                scroeGot.innerHTML++;
                if(words.length > 0){
                    genwords();
                }else {
                    let span = document.createElement('span');
                    span.className = 'good';
                    let spantext = document.createTextNode('congrationlation bro');
                    span.appendChild(spantext);
                     finishMessage.appendChild(span);
                }
            }else {
                let span = document.createElement('span');
                span.className = 'bad';
                let spantext = document.createTextNode('Game Over');
                span.appendChild(spantext);
                finishMessage.appendChild(span);
            }
        }
        
        
    },1000)

}
