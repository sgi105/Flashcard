class Game {
    constructor(list) {
        this.correctCount = 0;
        this.wrongCount = 0;
        this.currentWordOrderCount = -1;
        this.list;
        this.flashCard = document.querySelector('.card');
        this.shuffleList = [];
    }

    /**
     * Initialize the game to be ready for play. Set the list for playing, add event listeners.
     */
    initialize() {

        this.list = list;

        // if next button is pressed, correct count ++ show the next card
        document.querySelector('.rightArrow').onclick = function (evt) {
            game.correctCount++;
            game.drawCard();
            console.log('right');

        }

        // if left button is pressed, wrong count ++ show the next card
        document.querySelector('.leftArrow').onclick = function (evt) {
            game.wrongCount++;
            game.drawCard();
            console.log('left');
        }

        // if down button is pressed, show the meaning
        document.querySelector('.downArrow').onclick = function (evt) {
            console.log('down');
            game.flashCard.textContent = game.shuffleList[game.currentWordOrderCount].card.definition;
        }

        this.shuffleCard();
        this.drawCard();

    }

    /**
     * shuffles the cards in random order.
     */
    shuffleCard() {
        var shuffleList = [];
        for (let cardElement of this.list.cards) {
            let shuffle = {};
            shuffle.card = cardElement;
            shuffle.randomNumber = Math.random();
            this.shuffleList.push(shuffle)
        }

        this.shuffleList.sort(function (a, b) {
            return a.randomNumber - b.randomNumber;
        });
    }


    /**
     * pull out a card from the list and place it on the screen.
     */
    drawCard() {

        this.currentWordOrderCount++;

        console.log(this.currentWordOrderCount);
        this.flashCard.textContent = this.shuffleList[this.currentWordOrderCount].card.word;

        //check for the length of the word and adjust font size accordingly
        if (this.flashCard.textContent.length <= 6) {
            this.changeFontSize(6);
        } else if (this.flashCard.textContent.length <= 10) {
            this.changeFontSize(5);
        } else this.changeFontSize(4);

        console.log('I am run!');
    }

    /**
     * change font size of the card.
     * @param   {integer} rem - size of the font in rem
     */
    changeFontSize(rem) {
        this.flashCard.style.fontSize = rem + 'rem';
    }






    // show progression bar on the bottom

    // when currentWordOrderCount goes over the length of the cards, show a score


}
