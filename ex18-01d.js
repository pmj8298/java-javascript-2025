const user = {name:'김가나',age:10}

// const updated = {age:20}
// console.log(user) // { name: '김가나', age: 10 }

// 객체의 키로 값을 읽는 법(R)
console.log(user.name) // 김가나
console.log(user['name']) // 김가나

// 객체를 추가하는 법(C)
user['address'] = '부산'
user.gender = 'male'
console.log(user) // { name: '김가나', age: 10, address: '부산', gender: 'male' }

// 객체를 수정하는 법(U)
user.age = 17
user['name'] = '김나나'
console.log(user) // { name: '김나나', age: 17, address: '부산', gender: 'male' }


// 객체를 삭제하는 법(D)
delete user['gender']
console.log(user) // { name: '김나나', age: 17, address: '부산' }

// 객체 Tip
const updated = { ...user, age:20}
// 위의 한 줄은 아래 두 줄을 합친 것
// const updated = {user:user, age:20}
// const updated = {user:{name:'김가나',age:10}, age:20}
console.log(updated) // { user: { name: '김나나', age: 17, address: '부산', gender: 'male' },age: 20 }