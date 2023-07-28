const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let user;
  let user2;

      beforeEach(() => {
        user = new Word('hello');
        user2 = new Word('apple');
      });    
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(user).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(user.word).to.equal('hello');
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      expect(user.removeVowels()).to.equal('hll')
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(user.removeConsonants()).to.equal('eo')
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(user.pigLatin()).to.equal('ellohay')
      expect(user2.pigLatin()).to.equal('appleyay')
    });
  });
});