function fc(num){
  let arr = new Array()
  for(let i=1; i<num+1; i++){
    arr.push(i)
  }
  let mul = 1;
  arr.forEach(function(fc){
    mul = mul*fc
  })
  return mul
}
