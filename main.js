/******************
 * YOUR CODE HERE *
******************/

function doubleAll(num) {
  const newNums = []
  for (let i = 0; i < num.length; i++) {
    newNums.push(num[i] * 2)
  }
  return newNums
}

function yelledGreetings(str) {
  const newStr = []
  for (let i = 0; i < str.length; i++) {
    newStr.push(str[i] + '!');
  }
  return newStr
}

function absoluteValues(num) {
  const value = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      value.push(num[i] * -1)
    } else
      value.push(num[i])
  }
  return value
}

function upperCaseFirstLetters(init) {
  const newArr = [];
  for (let i = 0; i < init.length; i++) {
    newArr.push(init[i][0].toUpperCase() + init[i].slice(1).toLowerCase())
  }
  return newArr
}

function changeToInitials(word) {
  const results = [];
  for (let i = 0; i < word.length; i++) {
    results.push(word[i][0] + word[i][word[i].indexOf(' ') + 1]);
  }
  return results
}

function doubleOdd(nums) {
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1 || nums[i] % 2 === -1) {
      results.push(nums[i] * 2)
    } else {
      results.push(nums[i])
    }
  }
  return results

}
function add1ToLeft(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    results.unshift(arr[i] + 1)
  } if (arr === arr % 2) {
    results.unshift(arr[i] + 1)
  }
  return results
}

/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
