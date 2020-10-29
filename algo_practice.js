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

//4th Algo *******
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


//5th Algo ****
/*
-Create a variable and assign it a number where it will turn to string and split number 
into individual elements in an array.
-Iterate over the array
-Use another for loop to add 0's to the element based on their place value
-Grab the numStr array and using the filter() check if any string element doesn't start with 0. If
so, then remove them from the array and put them in the numStr variable.
-Turn the array in a long string by using the join() method to the numStr variable
*/

function expandedForm(num) {
  // Your code here
  let numStr = num.toString().split('');
  
  for(let i = 0 ; i < numStr.length; i++ ){
      
      for(let y = numStr.length - i; y > 1; y--){
         numStr[i] += '0'; 
         // console.log(y);  use this to debug y, and no y value print out from console
      }
  }
  
 
  numStr = numStr.filter(value => !value.startsWith(0));
  return numStr.join(' + ')
}


//6th algo

function count(string) {
  let array = string.split('');
  let object = {};
  
  for (let i = 0; i < array.length; i++) {
    if (!object.hasOwnProperty(array[i])) {
      object[array[i]] = 1;
    } else { 
      object[array[i]] = object[array[i]] + 1;
    }
  }
  return object;
}

//7th Algo

function descendingOrder(n) { 
  let arrayNum = num.toString().split('').sort((a,b) => a - b).reverse();

  return arrayNum;
}