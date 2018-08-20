//sum up all numbers in a list
function sumofList(list){
  let sum = 0
  for(let i=0; i<list.length; i++){
    sum += list[i]
  }
  return sum
}
     // or
function findSum(list){
  let sum = 0
  list.forEach(function(l){
    sum+=l
  })
  return sum
}
