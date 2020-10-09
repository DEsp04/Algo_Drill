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
