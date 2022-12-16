//take items out of an element and store in variable

let names = ["Charles", "Brendan", "Dylan", "Lucas"]

//name1, name2, name3 = names
let [name1, name2, name3, name4] = names
console.log(name1, name2, name3)

//Object destructuring
let myObj = {
    question: 'What is 2+2?',
    answer: '4'
}

// let question = myObj.question
// let answer = myObj.answer

// console.log(question, answer)

let {question, answer} = myObj

console.log(question, answer)