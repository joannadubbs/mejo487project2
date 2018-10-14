// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Take a Quiz to Test Your Knowledge!!",
        "main":    "<p></p>",
        "results": "<h5></h5><p></p>",
        "level1":  "Excellent job!",
        "level2":  "Good job!",
        "level3":  "Solid start!",
        "level4":  "Good effort!",
        "level5":  "Keep studying!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "When was the 'American Dream' term first introduced?",
            "a": [
                {"option": "In a speech given by Herbert Hoover",      "correct": false},
                {"option": "After World War II",     "correct": false},
                {"option": "In the 1931 hit, 'Good night, Sweetheart' ",      "correct": false},
                {"option": "In a book titled 'The Epic of America' ",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> James Truslow Adams’ wrote 'The Epic of America' in 1931. </p>",
            "incorrect": "<p><span> Incorrect! The 'American Dream' idea was actually first introduced in 1931 in the book 'The Epic of America.' </span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What contributed to South of the Border's early success?",
            "a": [
                {"option": "The food was cheaper than its competitors.",               "correct": false},
                {"option": "Bootlegging was still common around South of the Border, so the alcohol appealed to many customers. ",   "correct": true},
                {"option": "Billboard marketing was brand new, and customers were intrigued.",               "correct": false},
                {"option": "Disneyland was too far for families in SC and NC to travel to.", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span>Even though prohibition ended in 1933 from the passing of the 21st Amendment,  North Carolina and South Carolina did not ratify the 21st Amendment. </p>",
            "incorrect": "<p><span>Not quite!</span>A contributing factor to South of the Border's early success was because bootlegging still was common around the SC and NC border, so a bar was appealing. </p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How did 'Pedro,' the South of the Border 'mascot' originate?",
            "a": [
                {"option": "Two of the motel bellboys from Mexico were referred to as 'Pedro' and 'Pancho' which later became 'Pedro.' ",           "correct": true},
                {"option": "South of the Border founder Alan Schafer's favorite cartoon character was named 'Pedro.'",                  "correct": false},
                {"option": "The first customer was named 'Pedro.'",  "correct": false},
                {"option": "Schafer's son was named 'Pedro.' ",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect!</span> 'Pedro' actually originated from one of the nicknames given to a motel bellboy from Mexico.</p>" // no comma here
        },
        { // Question 4
            "q": "What was 'The Negro Traveler's Green Book'?",
            "a": [
                {"option": "A book that informed people of color about the environment.",    "correct": false},
                {"option": "A book that informed people of color safe ways to travel.",     "correct": true},
                {"option": "A book that informed people of color how to cook while traveling.",      "correct": false},
                {"option": "A book that informed people of color about the top vacation destinations.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect!.</span> 'The Negro Traveler's Green Book' was a book people of color used to travel safely.</p>" // no comma here
        },
        { // Question 5
            "q": "True or False: In Mexico, a sombrero is typically worn by a folk musician called a 'mariachi' or by a horseman called a 'charro.'' ",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect!</span> That's actually true! </p>" // no comma here
        } // no comma here
    ]
};
