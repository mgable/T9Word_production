'use strict';
var T9WORD = T9WORD || {}; // namespace component 

T9WORD.controller = (function(){
    // private variables, protected by closure
    var data  = {0: [], 1: [], 2:['A','B','C'], 3: ['D','E','F'], 4: ['G','H','I'], 5: ['J','K','L'], 6:['M','N','O'], 7: ['P','Q','R','S'], 8: ['T','U','V'], 9: ['W','X','Y','Z']}, // numeric to alpha data mappings
    word = '', // variable to build individual words from characters
    words = [], // array to hold all possible character combinations
    root = '',  // variable to keep track of stating word characters during recursion
    errorMsg = ''; // error message

    // private functions, protected by closure
    /*
       Function: getWords

       Recursively maps alpha characters combinations from numberical input.

       Parameters:

          numberArray - an array of numbers

       Returns:

          Array of possible character combinations

    */
    function getWords(numberArray){
        var digit = numberArray[0];
        // TESTED - http://jsperf.com/t9wordloop
        for (var x = 0, l = data[digit].length; x < l; x = x + 1) {
            word = data[digit][x];
            if (numberArray[1]){
                root += word;
                getWords(numberArray.slice(1));
            } else {
                words.push((root + word).toLowerCase());
            }
        }
        word = '';
        root = root.slice(0,-1);
        return words;
    }

    /*
       Function: santize

       checks and cleans user input

       Parameters:

          entry - number | string

       Returns:

          string array | false

    */
    function santize(entry) {
        if (entry === ''){
            error (1);
            return false;
        } else if (/^\d*$/.test(entry)){
            entry = entry.replace(/[01]/g,'');
            if (entry.length === 0){
                error(2);
                return false;
            }
            return typeof entry === 'number' ? entry.toString().split(/\B/) : entry.split(/\B/);
        } else {
            error (0);
            return false;
        }
    }

    /*
       Function: error

       sets error message

       Parameters:

          code - number 

       Returns:

          nothing

    */
    function error(code){
        var errorCodes = ['Entry can only contain numbers', 'Please enter some numbers', 'A combination of only zeros and ones produces no results'];
        errorMsg = (errorCodes[code]);
    }

    // public API
    /*
       Function: getPossibleWords

       Gets ALL letter combinations and not just those which are actual words 

       Parameters:

          numberSequence - string 

       Returns:

          array of possible character combinations | string error message

    */
    return function getPossibleWords(numberSequence){
        var numArray = santize(numberSequence);
        if (numArray){
            words = [];
            words = getWords(numArray);
            return words;
        } else {
            return errorMsg;
        }
    };
})();