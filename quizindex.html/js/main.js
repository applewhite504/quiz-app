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
                <p>How much do you know about this great city?</p>
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
    //console.log(questionHTML);

    // update inner html in <main>
    $('main').html(`
        <article class="panel">
            <section class="inner">
                <h1>${currentQuestionIndex + 1}. ${STORE[currentQuestionIndex].text}</h1>
                <form id="quiz">
                    ${questionHTML}
                    <button type="submit">Submit</button>
                </form>
            </section>
            <footer>${currentQuestionIndex + 1} of 5</footer>
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

function checkAnswersValid(){
    let answerIndex = $('input[name=answer]:checked').val()
    let answerNotSelected = !answerIndex

    if(answerNotSelected) {
        alert('You must select an answer, now!!')
    } else {
        let answer =
        STORE[currentQuestionIndex].answers[
            Number($('input[name=answer]:checked').val())
        ]
        updateForm({answer, answerIndex})

        // increment correct / incorrect count
        answer.correct ? numCorrect++ : numIncorrect++
        updateCorrectIncorrect()
    }
}
function updateForm(){}
function updateCorrectIncorrect(){
    if($('footer.footer').length){
        $('footer.footer').html(`${numCorrect} correct / ${numIncorrect} incorrect`)
    } else {
        $('body').append(
            `<footer class="footer">${numCorrect} correct / ${numIncorrect} incorrect</footer>`
        )
    }
}

// listens for buttons clicks
// behavior is based on the currentState changed
function loadButtonListener(){
    $('main').on('click', 'button', function(event){
        event.preventDefault()

        switch(currentState){
            case STATES.START:
                loadNextQuestion()
                break
            case STATES.QUESTION:
                checkAnswersValid()
                break
            case STATES.CORRECT:
            case STATES.INCORRECT:
                currentQuestionIndex++
                currentQuestionIndex >= STORE.length
                    ? loadEnd()
                    : loadNextQuestion()
                break
            case STARTS.END:
                loadStart()
                break
        }
    })
}

// spin up 
$(() => {
    loadButtonListener()
    loadStart()
})
