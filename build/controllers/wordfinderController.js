'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//find word
function findword(req, res, next) {
  if (!req.params.word) {}
  //send word is required

  //comming word 'dgo'
  var commingWord = req.params.word;
  //change comming word into array ['d', 'g', 'o']
  var commingWodArray = commingWord.split('');
  //dictionary word into array ['A', ....]
  var wordArray = _fs2.default.readFileSync(_path2.default.resolve(__dirname, '../../public/words.txt')).toString().split('\n');
  var flag = true;
  var results = [];

  var _loop = function _loop(i) {
    //filter the possible word combination from comming word
    wordArray.filter(function (word) {
      //these are the only possible combination that can match to dictionary words and looking only character more than one
      if (word[0] === commingWodArray[i] && word.split('').length > 1) {
        //start cheking word to dictionary word
        var characterDictArray = word.split('');

        //matched words alwyas have either same word length as comming word or less
        if (characterDictArray.length <= commingWodArray.length) {

          for (var j = 0; j < characterDictArray.length; j++) {
            var countCharacter = word.split(characterDictArray[j]).length - 1;
            var countCommingWord = commingWord.split(characterDictArray[j]).length - 1;

            //if count of each character in commig word is equal to dict word
            if (countCharacter !== countCommingWord) {
              flag = false;
              break;
            }
            flag = true;
          }
          //count of each character in comming word is equal to dict word
          if (flag) {
            results.push(word);
          }
        }
      }
    });
  };

  for (var i = 0; i < commingWodArray.length; i++) {
    _loop(i);
  }
  return res.send(results);
}

exports.default = { findword: findword };