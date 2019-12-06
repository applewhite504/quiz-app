

const STORE = [

    //Question 1
    {
        question: "One of the most popular expressions in this city is, “Laissez les bon temps rouler!” Which means:",
                options: [
                    'Who cares?',
                    'Let\'s have some fun!', 
                    'Roll the dice!', 
                    'Let the good times roll!', 
                ],
                answer: 'Let the good times roll!'
            },


    //Question 2
    {
        question: "Everyone knows of New Orleans as “The Big Easy.” Another name for the city is:",
                options: [
                     'The Crescent City',
                     'Beignet City',
                     'Bourbon City',
                     'Cajun City',
                ],
                answer: 'The Crescent City'
            },


    //Question 3
    {
        question: "Which of these colleges is not located in New Orleans?",
                     'Tulane',
                     'Vanderbilt',
                    'Loyola',
                    'Dillard',
                 ],
                 answer: 'Vanderbilt'
            },


    //Question 4
    {
        question: "New Orleans is one of the few US cities that has been run under three different flags. It was founded by the French, had a period under WHICH COUNTRY'S RULE, before it was ruled under the French again and then was eventually sold to the United States?"
                    'Italy',
                     'Africa',
                     'England',
                     'Spain',
                 ],
                answer: 'Spain'
            },

    //Question 5
     {

        question: "What the rest of the country calls a “median,” New Orleans calls \“__________________.\" The strip of ground in the middle of the road was named after the French and Spanish of the citywho could only do business on specific these locations."
                    'Neutral ground',
                    'Middle lane',
                    'Central spot',
                    'Botanical garden',
                ],
                 answer: Neutral ground
             },

    //Question 6
    {
        question: "New Orleans is home to _________________, the world’s longest continuous bridge."
                   'Crescent City Tollway',
                   'Mardi Gras Bridge',
                   'Gumbo Bridge',
                  'Lake Pontchartrain Causeway'
               ],
              answer: "Lake Pontchartrain Causeway"
              },

    //Question 7
  {
        question: "The people who follow a brass band on the street while waving handkerchiefs in a circle above their heads in New Orleans are called \“___________\”. These folks do a special shuffle-step when they are following a band."
                     'Groupies',
                     'Mourners',
                     'Second Line',
                     'Roadies',
               ],
              answer: 'Second Line'
             },

    //Question 8         
  {
         question: "New Orleans has two major league professional sports teams. The Saints of the National Football League and the _____________ of the National Basketball Association.
                        'Jesters',
                        'Hornets',
                        'Hurricanes',
                       'Pelicans',
                 ],
                 answer: 'Pelicans'
             },
                  

    //Question 9
 {
        question: "The unique history and culture of the city make it a common setting for movies, as well as a frequent location for cinema production. Which of the following notable movies was NOT set nor filmed in New Orleans?"
                     'The Big Easy',
                     'Easy Rider',
                     'Gone With The Wind',
                     'A Streetcar Named Desire"'
               ],
                 answer: 'Gone With The Wind'
            },

    //Question 10
{        
        question: "New Orleans is completely surrounded by water, with a base below sea level, so the Army Corps of Engineers built what to protect the city against flooding?"
                      'Piers",
                      Beaches',
                     'Levees',
                     'Dams',
              ],
              answer: "Levees"
             }
                
            ];

    let score =0;
    let questionNumber=0;





            

//starting page with title, explanation, and start button
function startQuiz() {
    console.log('`startQuiz` ran');
}

//shows question with possible answers and submit button
function generateQuestion() {
    console.log('`generateQuestion` ran');
}
}

//when user submits their answer, this page gives them their results
function displayResults() {
    console.log('`displayResults` ran');
}

//user score is updated with the correct right out of 10 questions
function updateScore() {
    console.log('`updateScore` ran');
}

//question user is on is updated out of 10 questions
function updateQuestionNumber() {
    console.log('`updateQuestionNumber` ran');
}

//takes user to the next question
function nextQuestion() {
    console.log('`nextQuestion` ran');
}

//gives user their score
function finalScore() {
    console.log('`finalScore` ran');
}

//goes back to starting page
function restartQuiz() {
    console.log('`restartQuiz` ran');
}

//reset user score to zero
function resetStats() {
    console.log('`resetStats` ran');


function handleQuizApp() {
    startQuiz();
    generateQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();

}

$(handleQuizApp);


