var word = {
    hiddenWord: "",
    hiddenWordWithBlanks: "",
    wordList: ['person', 'chips', 'javascript', 'laugh', 'popcorn', 'cracker', 'guitar', 'pogs', 'crazy', 'bananas', 'iphone', 'chess', 'bread', 'tag', 'magazine', 'lamp', 'fries', 'system', 'linkedin', 'fridge', 'popcicle', 'google', 'amazon', 'trees', 'hangman', 'shirt', 'rent', 'cheese', 'grab', 'pregnancy', 'anger', 'abs', 'crib', 'treats', 'porche', 'peter'],
    
    // Selects random word from above
    setHiddenWord: function () {
        this.hiddenWord = _.shuffle(word.wordList)[5];
        console.log(this.hiddenWord);
        for (var i = 0; i < this.hiddenWord.length; i++) {
            this.hiddenWordWithBlanks += ("_");
        }
    },

    checkLetters: function (guessedLetters) {
        var correctLetters = _.intersection(this.hiddenWord, guessedLetters);
        var wrongLetters = _.difference(guessedLetters, correctLetters);
        var displayHidden = [];
        _.each(this.hiddenWord, function (letter) {
            if (_.contains(correctLetters, letter)) {
                displayHidden += letter;
            } else {
                displayHidden += "_";
            }
        });
        console.log(displayHidden);
        console.log(wrongLetters);
        return [displayHidden, wrongLetters];
    }
};

var showLives = {
    MAX_GUESSES: 8,
    guessedLetters: [],

      // Get elements
  var showLives = document.getElementById("mylives"),

    // Takes a new letter as input and updates the game
    // guesses come from word.checkLetters(guessedLetters)
    makeGuess: function (letter) {
        player.guessedLetters.push(letter);
        player.checkWin();
        player.checkLose();
        game.updateDisplay(word.checkLetters(player.guessedLetters)[0].join(" "), player.guessedLetters);
    }