var pages = ['.menuPage', '.createListPage', '.gamePage'];
var list = new List();
var game = new Game();


/** 
 * Only shows the specific page of input 
 * @param   {string}  page  -  the className of the page to show
 */
function pageController(page) {
    var pageElementList = [];

    for (let className of pages) {
        pageElementList.push(document.querySelector(className));
    }

    for (let pageElement of pageElementList) {
        if (page == pageElement.className) {
            pageElement.style.display = 'block';
        } else pageElement.style.display = 'none';
    }
}

pageController('menuPage')


/*---------------------------------------------------------------------------
-----------------------------------------------------------------------------
Menu Page
----------------------------------------------------------------------------
----------------------------------------------------------------------------*/


//page controlling from menu
document.querySelector('.playButton').onclick = function (evt) {
    evt.preventDefault();
    pageController('gamePage');
    game.initialize();
}

document.querySelector('.createListButton').onclick = function (evt) {
    evt.preventDefault();
    pageController('createListPage');
}

document.querySelector('.optionsButton').onclick = function (evt) {
    evt.preventDefault();
    pageController('optionPage');
}

document.querySelector('.donateButton').onclick = function (evt) {
    evt.preventDefault();
    pageController('donatePage');
}

//page controlling from createListPage

document.querySelector('.doneButton').onclick = function (evt) {
    evt.preventDefault();
    pageController('menuPage');
}








/*---------------------------------------------------------------------------
-----------------------------------------------------------------------------
Create List Page
----------------------------------------------------------------------------
----------------------------------------------------------------------------*/




document.getElementsByClassName('addWordButton')[0].onclick = function (evt) {
    evt.preventDefault();

    let word = document.querySelector('#wordInput').value;
    let definition = document.querySelector('#definitionInput').value;

    list.addCard(word, definition);

    document.querySelector('.addWordForm').reset();

    document.querySelector('#wordInput').focus();

    list.view();
};



/*---------------------------------------------------------------------------
-----------------------------------------------------------------------------
Game Page
----------------------------------------------------------------------------
----------------------------------------------------------------------------*/
