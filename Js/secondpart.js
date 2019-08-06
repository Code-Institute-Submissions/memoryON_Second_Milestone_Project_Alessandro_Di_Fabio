/*Continue Dashboardgame*/
function levelFiveBoard(num_cards) {

    card_flipped = 0;
    var output = '';
    shuffled = [];

    for (var i = 0; i < num_cards / 2; i++) {
        let cardAlreadyInShuffled = true;
        while (cardAlreadyInShuffled === true) {
            var card = getRandomInt(0, 11);
            if (shuffled.indexOf(cardList[card]) != -1) {
                
            }
            else {
                cardAlreadyInShuffled = false;
                shuffled.push(cardList[card]);
                shuffled.push(cardList[card]);
            }
        }
    }
    shuffle(shuffled);

    for (var i = 0; i < shuffled.length; i++) {
        output += '<div class="backLogoCardDiv"  id="card_' + i + '" onclick="memoryFlipTwoCard(this,\'' + shuffled[i] + '\')"></div>'
    }
    document.getElementById('dashboardgame').innerHTML = output;

    
}

function memoryFlipTwoCard(card, val) {
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
                setTimeout(flipTwoBack, 600);
            }
        }
    }
}

function flipTwoBack () {
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
    flipBackSound.play();
}
            