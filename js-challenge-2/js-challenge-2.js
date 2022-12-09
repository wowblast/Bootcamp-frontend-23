//Write a JS program to the smallest number in the array
let arr1 = [12,6,10,2,45,100]
console.log(arr1.reduce((minor,number)=> minor> number ? number:minor,arr1[0]))
//Write a JS program to find the least frequent item of an array.
let arr2=[3, 'c', 'c', 'a', 2, 3, 'c', 3,'c', 2, 4, 9, 9];

counter= {}
arr2.reduce((list,item)=> setCounter(counter, item),{} )
console.log(Object.keys(counter).reduce((last,key)=> counter[last] > counter[key]? last = key:last,Object.keys(counter)[0]))
function setCounter(list, item) {
  if(!list[item]) {
    list[item] = 1
  } else {
    list[item] ++
  }
}

//Write a JS program to remove duplicates in an array.
let arr3 = [7, 9, 1, 'a', 'a', 'f', 9 , 4,2, 'd', 'd']
console.log(arr3.reduce((last,item)=> last.includes(item)? last:last+ item,[]))
//Write a JS program to concat arrays.
let data = [["The", "little", "horse"],["Plane", "over", "the", "ocean"],["Chocolate", "ice", "cream", "is", "awesome"],["this", "is", "a", "long", "sentence"]]
console.log(data.map((item)=>item.reduce((arr,ob)=>arr+" "+ ob)))