// Return Largest Numbers in Arrays



function largestOfFour(arr) {
var newArray = [];
  for (var i=0; i<arr.length; i++) {
  var result=0;
    for (var j=0; j<arr[i].length; j++) {
      if (result<arr[i][j]){
        result=arr[i][j];
      }
    }
   newArray.push(result);
  }
  return newArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
