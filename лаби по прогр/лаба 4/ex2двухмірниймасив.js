//6 
 function max(matrix) {
  let maxE = -Infinity;
  for (let r of matrix) {       
    for (let num of r) {    
       if (num > maxE) { maxE = num}
    }  
  }
  return maxE;
} const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);