function reverseDigit(num){
  let reverse = new Array()
  num = num+""
  for(let i=num.length-1; i>-1; i--){
    reverse.push(num[i])
  }
  return reverse.join("")*1
}
