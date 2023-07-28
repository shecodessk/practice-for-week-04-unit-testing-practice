function isFive(num) {
  return num === 5 ? true : false;
}

function isOdd(number) {
  if(typeof number !== 'number'){
    throw new Error('Not a number')
  }

  return number % 2 !== 0 ? true : false;
}

function myRange(min, max, step = 1) {
  const array = [];
    for(let i = min; i <= max; i+= step){
        array.push(i);
    }
  return array;
}


module.exports = { isFive, isOdd, myRange };