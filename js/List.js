class List {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    /** 
     * Adds a new card to the list. 
     * @param   {string}  word  -  The word to add.
     * @param   {string}  meaning  -  The meaning to add.
     */
    addCard(word, definition) {
        let card = new Card(word, definition);
        this.cards.push(card);
    }


    /** 
     * Removes a card from the list with the given index.
     * @param   {integer}  index  -  Index of the card to remove
     */
    deleteCard(index) {
        this.cards.splice(index, 1);
        this.view();
    }

    /** 
     * Empties the wordList and updates it with the current cards
     */
    view() {
        document.querySelector('.wordList').innerHTML = '';

        for (let i = 0; i < list.cards.length; i++) {
            let newCard = document.createElement('div')
            newCard.className = 'wordMeaningPair';
            newCard.innerHTML = `<button class = "deleteWordButton">-</button>
                             <span class = "wordNumber">${i+1}.</span> 
                             <span class = "word">${this.cards[i].word}</span> 
                             <span class = "definition">&nbsp&nbsp&nbsp-&nbsp&nbsp&nbsp${this.cards[i].definition}</span>`
            document.querySelector('.wordList').appendChild(newCard);
        }


        /* this code adds event listener to a dynamically created deleteWordButton. 
        - when the button is clicked, the associating word is deleted from the list.
        - Array.prototype.slice.call() is a way to make the NodeList into an array;
        - alternative: [].slice.call()
        */
        document.querySelectorAll('.deleteWordButton').forEach(function (element, index) {

            element.onclick = function (evt) {
                evt.preventDefault();
                list.deleteCard(this.nextElementSibling.textContent.slice(0, -1) - 1);
            }
        })

    }
}
