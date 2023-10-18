"use strict";

const { MarkovMachine } = require("./markov.js");

let text, markovMachine, chains;

beforeEach(function () {
  text = 'The cat in the hat.';
  markovMachine = new MarkovMachine(text);
  chains = markovMachine.getChains();
});

describe("test getChains", function () {


  test('check if the returned chains are generated properly', function () {
    expect(chains).toEqual({
      'The': ['cat'],
      'cat': ['in'],
      'in': ['the'],
      'the': ['hat.'],
      'hat.': [null],
    });
  });


});

describe("test getText", function () {
  test("test if the text generated is a string", function () {
    expect(markovMachine.getText()).toEqual(expect.any(String));
  });
});
