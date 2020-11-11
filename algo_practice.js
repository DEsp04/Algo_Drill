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

  return Number(arrayNum);
}

//8th Algo

function number(array) { 
  let arr = [...array]
  for (let i = 0; i < arr.length; i++) { 
    if (arr.length !== 0) { 
      arr[i] = `${i + 1}: ${arr[i]}`
    }
  }

  return arr;
}

//7th Algo
/*
The Western Suburbs Croquet Club has two categories of membership, 
Senior and Open. They would like your help with an application form that 
will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap 
greater than 7. In this croquet club, handicaps range from -2 to +26; the 
better the player the lower the handicap.

Input

Input will consist of a list of lists containing two items each. Each 
list contains information for a single potential member. Information 
consists of an integer for the person's age and an integer for the person's 
handicap.
*/
function openOrSenior(data){

  let arr = []
  
  for(let i = 0; i < data.length; i++){
    for(let j = 1; j < data[i].length; j++){

      if(data[i][j - 1] >= 55 && data[i][j] > 7){
        arr.push('Senior');
      } else {
        arr.push('Open');
      }
    }
  }
  return arr;
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);


//Algo 8
/*
The new "Avengers" movie has just been released! There are a lot of people 
at the cinema box office standing in a huge line. Each of them has a 
single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every 
single person in this line.

Can Vasya sell a ticket to every person and give change if he initially 
has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the 
bills he has at hand at that moment. Otherwise return NO.
*/
function tickets(peopleInLine) {
  debugger
    let bills = [0, 0, 0]
    for (let i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break
          
        case 50:
          bills[0]--
          bills[1]++
          break
          
        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }
      
      if (bills[0] < 0) {
        return 'NO'
      }
    }
    
    return 'YES'
}
  
tickets([25, 25, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100, 25, 50, 25, 100]);



/* 
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
*/


function list(arr){
  let len = arr.length;
  if(len==0) return '';
  return arr
       .slice(0, len-1)
       .map((e) => e.name)
       .join(", ") + (len > 1 ? ' & ' : '') + arr[len - 1].name
}