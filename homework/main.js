const questionsEl = document.getElementById('questions') 
// console.log(questionsEl)
const featuredQuestionEl = document.getElementById('featuredQuestion')

fetch('./questions.json')
    .then((response) => response.json())
    .then((data) => {
        questions = data
        for (const question of data) {
            addQuestion(question.question, question.answer, question.questionDifficulty, question.id)
        }
    })

let questions = []

function addQuestion(question, answer, questionDifficulty, id) {
    const questionEl = document.createElement('div')
    questionEl.classList.add('card','mb-3')

    //input type text , submit put my questions div inside a submit form  

    questionEl.innerHTML=`
        <div class="card-body">
            <h2>Question: ${question}</h2> 
            <input type="text" class="mt-4" id="answers${id}" required maxlength="8" size="80">
        </div>
    `
    questionEl.addEventListener('click', (event) => {
        let questionDifficultyHTML = ''
    
        for (const difficulty in questionDifficulty) {
            questionDifficultyHTML += `
                <li class="list-group-item">
                    <strong>${difficulty}:</strong> ${questionDifficulty[difficulty]}
                </li>
            `
        }
    
        console.log(questionDifficultyHTML)
    
        featuredQuestionEl.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h2>${question}</h2>
                    <p class="mb-0">${answer}</p>
                </div>
                <ul class='list-group list-group-flush">
                    ${questionDifficultyHTML}
                </ul>
            </div>
        `
    })
    
    questionsEl.appendChild(questionEl)
}


const clickedEvent = () => {
    // console.log(questions)
    const scoreEl = document.getElementById('score') 
    countCorrect = 0
    for (index in questions) {
        let inputAnswer = document.getElementById(`answers${questions[index].id}`);
        console.log(inputAnswer.value);
        let keyAnswers = questions[index].answer;
        console.log(keyAnswers)

        if (inputAnswer.value == keyAnswers) {
            countCorrect +=1;
            inputAnswer.parentNode.style.backgroundColor = 'rgb(8, 125, 39)'
        } else if (inputAnswer.value !== keyAnswers) {
            inputAnswer.parentNode.style.backgroundColor = 'rgb(137, 22, 22)'
        }  
    
    }  console.log(`${countCorrect}/10`) 
    
    const questionCorrectEl = document.createElement('div')
    questionCorrectEl.classList.add('card','mb-3')

    //input type text , submit put my questions div inside a submit form  

    questionCorrectEl.innerHTML=`
        <div class="card-body">
            <h2>Score: ${countCorrect}/10</h2> 
        </div>
    `
    scoreEl.appendChild(questionCorrectEl)
    }
    

    // console.log(document.getElementById('answers'))

// }

//take input(id=answers) and check with key value answer

