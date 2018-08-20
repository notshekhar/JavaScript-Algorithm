function reverseArray(arr){
  let reverseArr = new Array()
  for(let i=arr.length-1; i>-1; i--){
    reverseArr.push(arr[i])
  }
  return reverseArr
}
