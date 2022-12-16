function add(x,y){
    return x+y
}

let myNums = [1,2]
console.log(add(myNums[0],myNums[1]))
console.log(add(...myNums))

let myNumsCopy = [...myNums]
//to not change the original copy
myNumsCopy[1] = 'COPY'

console.log(myNums)
console.log(myNumsCopy)

let myPerson = {
    name: 'Dylan',
    favoriteColor: 'Purple',
    address: 'Somewhere in Illinois'

}

// object = dictionary in python

let myPerson2 = {...myPerson}

myPerson2.name = 'Cool Guy Dylan'

console.log(myPerson)
console.log(myPerson2)


//spread operator to merge collection

let myArr1 = ['a', 'b', 'c']
let myArr2 = ['d', 'e', 'f']

let myCombinedArr = [...myArr1, ...myArr2]
let reversedmyCombinedArr = [...myArr2, ...myArr1,...myArr2]
console.log(myCombinedArr)
console.log(reversedmyCombinedArr)

let alpha  =[1, 2, ...myCombinedArr, 'g', 'h']
console.log(alpha)

let userData = {
    firstName: 'Dylan',
    lastName: 'Smith',
    address: 'Somewhere',
    posts: ['Test Post']
}

let userAuth ={
    email: 'dylan@codingtemple.com',
    sessionToken: '1234A',
    username: 'dsmith'
}

let user = {
    ...userData,
    ...userAuth,
    loggedIn: true
}

console.log(user)