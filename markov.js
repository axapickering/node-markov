"use strict";
const _ = require("lodash");
/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
      const words = this.words;
      const chains = {};

      for (let index = 0;index < words.length;index++) {

        let nextWord = words[index+1] || null;

        if (!([words[index]] in chains)) {

          chains[words[index]] = [nextWord];

        } else {

          chains[words[index]].push(nextWord);
      }
    }

      return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let word = this.words[0];
    let textArray = []; // use array?
    let nextWord;
    while (word !== null) {
      console.log(word)
        textArray.push(word);
        nextWord = _.sample(this.chains[word]);
        word = nextWord;
    }

    return textArray.join(" ");
  }

}

module.exports = { MarkovMachine }
