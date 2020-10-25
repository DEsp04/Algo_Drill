//1st Algo ******
var countBits = function (n) {
  //turns number into binary code 2 -> "10"
  let binary = n.toString(2);
  let num = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary.charAt(i) == 1) {
      num += 1;
    }
  }
  return num;
};

//2nd Algo *******

function disemvowel(str) {
  let strArray = str.split("");

  //Map will return a new array with altered element
  let vowelsOut = strArray.map((element) => element.replace(/[aeiou]/gi, ""));

  return vowelsOut.join("");
}

//3rd Algo ******

function getCount(str) {
  let matchArray = str.match(/[aeiou]/gi);

  if (matchArray === null) {
    return 0;
  } else {
    return matchArray.length;
  }
}

//Take a look at the algo below

function digital_root(n){
  debugger

  if(n < 10){
      return n;
   }

  //We going to get the last number from by
  //by dividing n with 10. Remainder will be last
  //number of n
  const lastNumber = n % 10;
  
  //Remaining number is the number left on n
  //after removing the last number
  const remainingNumber = Math.floor(n/10);

  return digital_root(lastNumber + digital_root(remainingNumber));
}
