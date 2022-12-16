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
    
    for (index in questions) {
        let inputAnswer = document.getElementById(`answers${questions[index].id}`);
        console.log(inputAnswer.value);
        let keyAnswers = questions[index].answer;
        console.log(keyAnswers)
        
        // while(inputAnswer.parentNode.style.backgroundColor = 'white'){

        if (inputAnswer.value == keyAnswers) {
            return inputAnswer.parentNode.style.backgroundColor = 'green'
        } else if (inputAnswer.value !== keyAnswers) {
            return inputAnswer.parentNode.style.backgroundColor = 'red'
        }  
    
    }  console.log(`${countCorrect}/10`) 
    }

    // console.log(document.getElementById('answers'))

// }

//take input(id=answers) and check with key value answer

