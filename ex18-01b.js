function fn(a,b,arr) {
    console.log(a,b,arr) // 1 2 3
}
fn(1,2,3) 

function fn1(arr) {
    console.log(arr) // 1
}
fn1(1)

function fn2(a,b,arr) {
    console.log(a,b,arr) // 1 2 undefined
}
fn2(1,2)

function fn3(...arr) { // 나머지 매개변수
    console.log(...arr) // 전개연산자 // 1 2 3 4 5 6
}
fn3(1,2,3,4,5,6)