const STATES = {
    START: 'start',
    QUESTION: 'question',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    END: 'end'
}

// declare variables
let currentState, numCorrect, numIncorrect, currentQuestionIndex

// set start state
function loadStart(){
    // set state
    currentState = STATES.START

    // reset counters
    numCorrect = 0
    numIncorrect = 0
    currentQuestionIndex = 0

    // set id on main element to state
    $('main').attr('id', currentState)

    // update the inner html in <main>
    $('main').html(`
        <article class="panel">
            <section class="inner">
                <h1>New Orleans Quiz App</h1>
                <button>Begin</button>
            </section>
        </article>`)
}

function loadNextQuestion(){
    currentState = STATES.QUESTION
    $('main').attr('id', currentState)
    $('form').removeClass()
    $('button').html(`Submit`)

    let questionHTML = createQuestionHTML()

    // update inner html in <main>
    $('main').html(`
        <article class="panel">
            <section class="inner">
                <h1>${currentQuestionIndex + 1}. ${STORE[currentQuestionIndex].text}</h1>
                <form id="quiz">
                    ${questionsHTML}
                    <button type="submit">Submit</button>
                </form>
            </section>
            <footer>${currentQuestionIndex + 1} of 10</footer>
        </article>`)
    
    updateCorrectIncorrect()
}

function loadEnd(){}

function createQuestionHTML(){
    return STORE[currentQuestionIndex].answers
    .map((question, index) => {
        return `
            <div class="answer">
                <input type="radio" name="answer" value="${index}" id="option${index}"/>
                <label for="option${index}">${question.text}</label>
            </div>`
    })
    .join('\n')
}
function checkAnswersValid(){}
function updateForm(){}
function updateCorrectIncorrect(){}
function loadButtonListener(){}

// spin up 
$(() => {
loadStart()
})
