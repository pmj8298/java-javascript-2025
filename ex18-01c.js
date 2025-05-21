const a = [1,2]
const b = [3,4]
const result = a + b // 안됨 스트링 형식으로 더해짐
const result1 = [...a,...b]
console.log(result,typeof(result)) // 1,23,4 string
console.log(result1,typeof(result1)) // [ 1, 2, 3, 4 ] 'object'
console.log(result1,Array.isArray(result1)) // [ 1, 2, 3, 4 ] true