// 옅은 복사
const arr = [11,22,33,44,55]
console.log(arr) // [ 11, 22, 33, 44, 55 ]
const arr2 = arr
arr2[2] = 77
console.log(arr,arr2) // [ 11, 22, 77, 44, 55 ] [ 11, 22, 77, 44, 55 ]
console.log(arr == arr2) // true
console.log(arr === arr2) // true

// 깊은 복사
const srr = [66,77,88,99,0]
const arr3 = [...srr]
console.log(arr3) // [ 66, 77, 88, 99, 0 ]
arr3[3] = 77
console.log(srr,arr3) // [ 66, 77, 88, 99, 0 ] [ 66, 77, 88, 77, 0 ]
console.log(srr == arr3) // false
console.log(srr === arr3) // false

console.log(Math.max(11,45,7,7458,1,24,8,12,3,21,46,546546)) // 546546
console.log(Math.max(arr)) // NaN
console.log(Math.max(...arr)) // 77
console.log(Math.min(...arr)) // 11