function convertBinary(num){
  let n = 0
  let binArr = []
  let diff = Math.pow(2, n)
  while(diff<= num){
    n++
    diff = Math.pow(2,n)
    binArr.push(0)
  }
  n--
  while(num>0){
    if(Math.pow(2,n) <= num){
      binArr[n] = 1
      num-=Math.pow(2, n)
    }
    n--
  }
  return binArr.reverse().join('') * 1
}
