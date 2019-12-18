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
            <img src="images/jacksonsq.jpeg">
            
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
                <div class="img">${STORE[currentQuestionIndex].image}</div>
                    ${questionHTML}
                    <button type="submit">Submit</button>
                </form>
            </section>
            <footer>${currentQuestionIndex + 1} of 5</footer>
        </article>`)
    
    updateCorrectIncorrect()
}

function loadEnd(){
    currentState = STATES.END
    $('main').attr('id', currentState)
    $('button').html(`Try again`)

    let message =
        numCorrect / STORE.length >= 0.5
            ? 'Nice Job!'
            : 'Better luck next time! 😭'

    // update the inner html in <main>
    $('main').html(`
        <article class="panel">
            <section class="inner">
            <p>YOU GOT<br /><span class="large">${numCorrect} / ${STORE.length}</span></p>
            <p>${message}</p>
            <img src="images/flag.jpeg" width="500" height="200"><br />
            <br />
            <br />
            
            <button>Try Again</button>
        
            
    
            </section>
        </article>
    `)

    // remove footer
    $('footer.footer').remove()
}

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
        alert('Please select an answer.')
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

// updates the question form
function updateForm({answer, answerIndex}){
    currentState = answer.correct ? STATES.CORRECT : STATES.INCORRECT

    //add correct/incorrect (stat) class to the form
    $('form').addClass(currentState)

    // disable all radio button
    $('input[type=radio]').prop('disabled', true)

    if(answer.correct){
    // add a class, a success message and icon to correct answer
    $('.answer')
        .eq(answerIndex)
        .addClass('correct')
        .append(
            `<p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M17.62 10H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 0 1 5 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 0 0-.93 1.36l3.5 7.02a1 1 0 0 0 .93.62H16v-8.76zm2 .76v8h2v-8h-2z"/></svg>Correct! Nice job!</p>`
        )
    } else {
        let correctAnswerIndex = STORE[currentQuestionIndex].answers.findIndex(
            answer => answer.correct
        )
        // add a class, a error message and icon to incorrect answer
        $('.answer')
        .eq(answerIndex)
        .addClass('incorrect')
        .append(
            `<p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"/></svg>Sorry, that's wrong, correct answer was ${STORE[currentQuestionIndex].answers[correctAnswerIndex].text}`
        )

        // add class to correct answer
        $('.answer')
            .eq(correctAnswerIndex)
            .addClass('correct')
    }

    // update button text
    $('button').html(`Next &raquo;`)
}

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
            case STATES.END:
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
