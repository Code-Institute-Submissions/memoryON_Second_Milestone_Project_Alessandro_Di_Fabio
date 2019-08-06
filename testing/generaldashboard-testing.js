/*Dashboard arrays & var*/
/*I have found a good starting point on this link: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array; This helps me also further*/
var cardList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N"];
var shuffled = [];
var memory_values = [];
var memory_card_ids = [];
var card_flipped = 0;
var num_cards = 4;

/*scores*/
var match = 0;
var click = 0;
var level = 0;
var score = [];
var playerLevel = 0;
var scoreTotalLevelPoints = 0;
var scoreLevelPoints = 0;
var playerEndAppTotalScore = 0;
var totalMatchScore = 0;
var notMatchedScore = 0;
var noMatches = 0;
var cardMatched;
var playerClick = 0;

/*Timing*/
var second = 0;
var minute = 0;
var interval;


var userName = "Player";


/*Audio*/
/*Function taken from here: https://stackoverflow.com/questions/9419263/playing-audio-with-javascript*/
var matchSound = new Audio('Sounds/service-bell_daniel_simion.wav');
var endAppSound = new Audio('Sounds/Fireworks-Soundbible.com-573238425.wav');
var flipBackSound = new Audio('Sounds/Buzz-SoundBible.com-1790490578.wav');
var endLevelSound = new Audio('Sounds/Ovation-Mike_Koenig-1061486511.wav');
var resetSuccessSound = new Audio('Sounds/Slap-SoundMaster13-49669815.wav');
var startAppSound = new Audio('Sounds/Jump-SoundBible.com-1007297584.wav');

/*How shuffle an array, answer on: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array*/

function shuffle (arr) {
    var i = arr.length,
    j, temp;
        while (--i > 0) {
         j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr [j] = arr [i];
        arr [i] = temp;
    }
    
}

/*How generate randon whole numbers in Java,answer on: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Right side of the desktop*/

function showDashBoardGame () {
    $("#startBtn").click(function() { $(".dashboardgame").show(); });
}

function startApp() {
    startTimer();
    showDashBoardGame();
    startAppSound.play();
    
    newBoard(num_cards);
    
}

function PlayPauseGame() {
    if ($('#startBtn').hasClass('fa-play')) {
        showDashBoardGame();
        startApp();
        
    }
    if ($('#startBtn').hasClass('fa-pause')) {
        stopApp();
    }
}

function stopApp() {
    stopTimer();
}

function switchPlayBtnClass () {
    $("#startBtn").toggleClass('fas fa-play fas fa-pause');
}

/*Dasboard App - grey ground*/
/*Explanations on how to develop this part, I found some ideas at the following links: https://stackoverflow.com/questions/54120281/how-to-flip-cards-if-match-keep-open-if-not-flip-back; https://stackoverflow.com/questions/19765252/java-memory-game-how-to-flip-individual-cards
A lot of resources also come from private bibliography (eg. Javascript books) and Slack community - fellow students*/

function newBoard(num_cards) {
    
    console.log("cards game" + num_cards); /*tested*/
     
    card_flipped = 0;
    var output = '';
    shuffled = [];
    
    for (var i = 0; i < num_cards /2; i++) {
        
        let cardAlreadyInShuffled = true;
        while (cardAlreadyInShuffled === true) {
            var card = getRandomInt(0,11);
            if (shuffled.indexOf(cardList[card]) != -1) {
                
            }
            else {
                cardAlreadyInShuffled = false;
                shuffled.push(cardList[card]);
                shuffled.push(cardList[card]); //Repeating two times having the match
            }
        }
        console.log(shuffled);
    }
    
    shuffle(shuffled);
    
    console.log('shuffled', shuffled);
    
    for (var i = 0; i < shuffled.length; i++) {
        output += '<div class="backLogoCardDiv"  id="card_' + i + '" onclick="memoryFlipCard(this,\'' + shuffled[i] + '\')"></div>';
    }
     document.getElementById('dashboardgame').innerHTML = output;
}

/*Flip Cards function*/
/*A clear explanation on how develop a flip cards game, i have got from the following book" Java, Corso Pratico di Programmazione"*/

function memoryFlipCard(card, val) {
        if (card.innerHTML === "" && memory_values.length < 2) {
        card.style.background = 'url(../Images/background_1.jpg)';
        card.innerHTML = '<img id="imgCard" class="backImg" src="Images/card/' + val + '.png"/>';
        if (memory_values.length === 0) {
            totalClick();
            memory_values.push(val);
            memory_card_ids.push(card.id);
        }
        else if (memory_values.length == 1) {
            totalClick();
            memory_values.push(val);
            memory_card_ids.push(card.id);
        
            if (memory_values[0] == memory_values[1]) {
                cardMatch();
                showMatch();
                matchSound.play();
                card_flipped += 2;
                
                memory_values = [];
                memory_card_ids = [];
                 
                if (card_flipped == shuffled.length) {
                    document.getElementById('dashboardgame').innerHTML = "";
                    generateNewBoard();
                    levelUp();
                    totalScore();
                }
            }
            else {
                flipBackSound.play();
                setTimeout(flip2Back, 600);
            }
        }
    }
}

function flip2Back () {
    var card_1 = document.getElementById(memory_card_ids[0]);
    var card_2 = document.getElementById(memory_card_ids[1]);
    card_1.style.cssText = 'background: url(Images/card_back_blue.png) no repeat, background-size: cover';
    card_1.innerHTML = "";
    card_2.style.cssText = 'background: url(Images/card_back_blue.png) no repeat, background-size: cover';
    card_2.innerHTML = "";
    
    memory_values = [];
      memory_card_ids = [];
    notMatchedScore++; 
    noMatches = notMatchedScore;
    console.log("not matched score is " + notMatchedScore); /*tested*/

}

/*Dashboard game and level of the player*/
/*At the following link i have found some interesting ideas on how to impmenet the leveling up for a Game in Java: https://stackoverflow.com/questions/36036060/java-game-leveling-up
Other books bibliography and colleagues have helped me out further*/

function generateNewBoard() {
    if (level > 1 && level < 4) {
        stopTimer(); 
        $('#nextLevelModal').modal({ show: true });
        newBoard(num_cards + 4); 
        num_cards += 4; 
        endLevelSound.play(); 
    }
    if (playerLevel === 1) { 
        stopTimer();
        $('#levelTwoModal').modal({ show: true });
        newBoard(num_cards + 4);
        num_cards += 4;
        endLevelSound.play();
    }
    
    if (level == 4) { /*Level Completed and new level reached the 4th. Number of cards has been changed to 10. Since i was facing issue to run the above code for cards flipping - i have added the script from another js file*/
        num_cards = 10;
        stopTimer();
        $.getScript("Js/secondpart.js", function() {
            levelFiveBoard(num_cards);
        });
        $('#levelFiveModal').modal({ show: true });
        $('#nextLevelModal').modal('hide');
        endLevelSound.play();
    }
    
     if (level > 4 && level < 8) {
        stopTimer();
        $.getScript("Js/secondpart.js", function() {
            levelFiveBoard(num_cards);
        });
        num_cards += 2;
        $('#nextLevelModal').modal({ show: true });
        $('#levelFiveModal').modal('hide');
                endLevelSound.play();
    }
    if (level == 8) { /*End of Game*/
        $('#nextLevelModal').modal('hide');
        $('#endModal').modal({ show: true });

        stopTimer();
        endApp();
    }
}


/*To let the Bootstrap Modal Open, i have used JQuery Function, here the link adapted to my idea: https://stackoverflow.com/questions/13183630/how-to-open-a-bootstrap-modal-window-using-jquery*/
function showOnLoadModal() {
    if (userName != "Player") {
        $(window).on('load', function() {
            $('#onLoadModal').modal('hide');
        });
    }
    if (userName === "Player") {
        $(window).on('load', function() {
            $('#onLoadModal').modal('show');
        });
    }
}


/*Setting up the Timer of my app. I have found ideads here and adapted to my project https://stackoverflow.com/questions/4044726/how-to-set-a-timer-in-java*/

function startTimeDisplay() {
    timer.innerHTML = "Time: <br/>" + "mins " + " : " + "secs";
}

function startTimer() {
    var timer = document.querySelector("#timer");
    interval = setInterval(function() {
                timer.innerHTML = "Time: <br/>" + minute + " : " + second + "";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        document.getElementById('endapptimer').innerHTML = timer.innerHTML; //show the time to the end app modal

    }, 1000);
    document.getElementById('timer').innerHTML = "Time: <br/>" + minute + " : " + second + "";

}

/*How to reset. I have adapted the following function to my scope: https://stackoverflow.com/questions/49174157/reset-time-element*/

function resetTimer() {
    stopTimer();
    second = 0;
    minute = 0;
    timer.innerHTML = "Time: <br/>" + "mins " + " : " + "secs";
}

function stopTimer() {
    clearInterval(interval);
}

/*Right side of the menu: all the function needed to fill out the dashboardgame*/
function cardMatch() {

    if (level >= 5) {
        for (i = 0; i < shuffled.length / num_cards; i++) {
            match++;
            scoreTotalLevelPoints += 5;
            totalMatchScore = scoreTotalLevelPoints;
        }
    }
    if (level > 0 && level < 5)
        for (i = 0; i < shuffled.length / num_cards; i++) {
            match++;
            scoreTotalLevelPoints += 5;
            totalMatchScore = scoreTotalLevelPoints;
        }
}

function showMatch(matchSum) {
    let cardMatched = ("Matches: " + match);
    $('#matches').text(cardMatched);
    
    console.log(cardMatched);/*tested*/
}

function totalClick() {
    click++;
    playerClick = click;
    console.log("click " + click);/*tested*/
    showTotalClick();
}

function showTotalClick() {
    let cardClicked = ("Total Click: " + playerClick);
    $('#totalClick').text(cardClicked);
    console.log(cardClicked);/*tested*/
}

function levelUp() {
    level++;

    $('#level').text("Level " + level);
    playerLevel = level;
    previousLevel = level - 1;

    document.getElementById('nextLevelModalTitle').innerHTML = "Well Done, you passed the level " + previousLevel;
    
    console.log("the level is " + level);/*tested*/
}


function totalScore(total) {
    if (level > 1) {
        let levelPoints = level;
        scoreLevelPoints = levelPoints;

        totalAppScore = (totalMatchScore + previousLevel) - noMatches;
        
        console.log(" level score is" + scoreLevelPoints);
        console.log(" total matches score is " + totalMatchScore);
        
        /*This function was recommended to me by other students in Slack community*/
        score.push(totalAppScore); 
        total = score.reduce((acc, cur) => acc + cur, 0).toFixed(0); 
        playerEndAppTotalScore = total - click; 
        document.getElementById('totalScore').innerHTML = ("Total Score: " + playerEndAppTotalScore);
        $('#totalMatchScore').text(userName + " total score: " + playerEndAppTotalScore); 

    }
    else {
        document.getElementById('totalScore').innerHTML = "Total Score: " + 0;
    }
    
        console.log("total is " + playerEndGameTotalScore);/*tested*/
}

function endApp() {
    endAppSound.play();
    $('#nextLevelModal').modal('hide');
    num_cards = 0;
    stopApp();

    if (playerEndAppTotalScore >= 550) {
        $("#endAppSentence").text("Well done! You rock!");
        $("#lowScoreEndApp").hide();
        $("#midScoreEndApp").hide();
    }
    else if (playerEndAppTotalScore <= 550 && playerEndAppTotalScore >= 350) {
        $("#endAppSentence").text("Hey, you could do better than that!");
                $("#bestScoreEndApp").hide();
        $("#lowScoreEndApp").hide();
    }
    else if (playerEndAppTotalScore < 350) {
        $("#endAppSentence").text("Try again and train your memory!");
        $("#bestScoreEndApp").hide();
        $("#midScoreEndApp").hide();
    }
}

/*Clear Reset function. I have adapted this function to my scope: https://stackoverflow.com/questions/54128546/how-to-reset-clear-the-input-field-without-reloading-the-input-field/54128811#54128811*/
function dataReset() {

    resetTimer();
    stopTimer();

    match = 0;
    click = 0;
    playerClick = 0;
    totalMatchScore = 0;
    showTotalClick();

    score = [];
    notMatchedScore = 0;
    noMatches = 0;


    level = 0;

    scoreTotalLevelPoints = 0;
    
    newBoard();
    num_cards = 4;
/*clear all input*/
    localStorage.clear("userName");
    userName = "Player";
    displayPlayerName();
        store();

    $('#startBtn').removeClass('fa-pause');
    $('#startBtn').addClass('fa-play');

    showMatch();
    levelUp();
    totalScore();

    resetSuccessSound.play();
}

function successAlert() {
    setTimeout(function() { $('#successAlertModal').modal('show'); }, 500);
    setTimeout(function() { $('#successAlertModal').modal('hide'); }, 2000);
}

/*App Username*/

/* In order to let save the UserName selected in my dashboardgame and in the fade modal as well i have used the localstorage function.
I have found more info at the following links: https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage ; https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage*/

var userName = localStorage.getItem("userName");

function store() {
    userName = $("#username").val();
    localStorage.setItem("userName", userName);
    
     console.log(userName); /*tessted*/
}

function displayPlayerName() {

    if (userName != "") {
        $('#playerName').text("Player: " + userName);
    }
    if (userName === null) {
        userName = "Player";
        $('#playerName').text("Player: " + userName);
    }
    else if (userName == "") {
        userName = "Player";
        $('#playerName').text("Player: " + userName);
    }
    
    console.log(userName); /*tested*/
}

//Show a success alert or an error alert if the player name is or is not inserted
function showAlertPlayerName() {
        if (userName != "Player") {
        $('#playerNameSuccess').show();
        setTimeout(function() { $('#playerNameSuccess').hide(); }, 1500);
    }
    if (userName == "Player") {
        $('#playerNameError').show();
        setTimeout(function() { $('#playerNameError').hide(); }, 1500);
    }
}

//Change Player Section
function changePlayerName() {

    userName = $("#changeusername").val();
    localStorage.setItem("userName", userName);
    
     console.log(userName); /*tested*/
}


/*Player confirmation - overlay*/

function showAlertName() {
    if (userName != "Player") {
        $('#playerNameSuccess2').show();
        setTimeout(function() { $('#playerNameSuccess2').hide(); }, 1500);
    }
    if (userName == "Player") {
        $('#playerNameError2').show();
        setTimeout(function() { $('#playerNameError2').hide(); }, 1500);
    }
}

function SoundClass() {
    $("#soundBtn").toggleClass('fas fa-bell-slash fas fa-bell');
}

function audioOnOff() {
    if ($('#soundBtn').hasClass('fa-bell-slash')) {
        audioOff();
    }
    if ($('#soundBtn').hasClass('fa-bell')) {
        audioOn();
    }
}
/*App Audio Section*/
function audioOff() {
    endAppSound.muted = true;
        flipBackSound.muted = true;
    endLevelSound.muted = true;
    matchSound.muted = true;
    resetSuccessSound.muted = true;
    startAppSound.muted = true;
}

function audioOn() {
    endAppSound.muted = false;
    flipBackSound.muted = false;
    endLevelSound.muted = false;
    matchSound.muted = false;
    resetSuccessSound.muted = false;
    startAppSound.muted = false;
}

newBoard(num_cards);
showDashBoardGame();
levelUp();
showTotalClick ();
showMatch();
totalScore();
displayPlayerName();
showOnLoadModal();
audioOnOff();
startTimeDisplay ();
