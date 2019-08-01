function deleteFirstElement(arr, i){
  if(i === arr.length){
    arr.pop();
    return arr;
  }
  else{
    [arr[i] , arr[i-1]] = [arr[i-1] , arr[i]]; 
    ++i;
    return deleteFirstElement(arr, i);
  }
}


let arr = []; 
let i = 0;
console.log(deleteFirstElement(arr, i));