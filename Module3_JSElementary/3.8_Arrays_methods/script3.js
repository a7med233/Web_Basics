//first solution:
let arr = [5, 2, 1, -10, 8];
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  arr.reverse(arr.sort(compareNumeric));
  alert(arr);   

//second solution:
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);

alert(arr2); 
