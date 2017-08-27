import path from 'path';
import fs from 'fs';
//find word
function findword(req, res, next) {
  if (!req.params.word) {
    //send word is required
  }
  //comming word 'dgo'
  const commingWord = req.params.word;
  //change comming word into array ['d', 'g', 'o']
  const commingWordArray = commingWord.split('');
  //dictionary word into array ['A', ....]
  const wordArray = fs.readFileSync(path.resolve(__dirname, '../../public/words.txt')).toString().split('\n');
  let flag = true;
  let results = [];

  for (let i = 0; i < commingWordArray.length; i++) {
    //filter the possible word combination from comming word
    wordArray.filter(word => {
      //these are the only possible combination that can match to dictionary words and looking only character more than one
      if (word[0] === commingWordArray[i] && word.split('').length > 1) {
        //start cheking word to dictionary word
        let characterDictArray = word.split('');

        //matched words alwyas have either same word length as comming word or less
        if (characterDictArray.length <= commingWordArray.length) {
          //creating deep copy of comming word so that it will only affect for one word loop
          let compareWord = (' ' + commingWord).slice(1);
          //looping through each character of an dictionary array
          for (let j = 0; j < characterDictArray.length; j++) {

            if (!compareWord.includes(characterDictArray[j])) {
              flag = false;
              break;
            }
            //if comming word contains dict word then delete that word in comming word string and continue
            compareWord = compareWord.replace(characterDictArray[j], '');
            flag = true;
          }
          //if all dict words are in comming word flag remains true
          if (flag) {
            results.push(word);
          }
        }
      }

    })
  }
  return res.send(results);
}

export default { findword };