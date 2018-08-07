# _ FlashCards _
#### Tuesday, 8/7/18
#### By _**James Hanley & Alex Bunnell **_
-----------------
## Prompt
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user’s age based on a planet’s solar years. You will need to use the Javascript Date object.
You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit your specs before starting to code. You need at least one test for each spec.
## Setup Requirements & Instructions
## Contact details
1. Alex Bunnell
  - Email: ~
  - Github: ~
2. James Hanley
  - Email: hanley.doth@outlook.com
  - Github: hanleyjames.github.io
## BDD/Spec
1. Take a person’s age in years and convert it into seconds.
2. Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)
3. Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
4. Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
5. Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
6. Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
7. Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
8. If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

|Behavior|Input|Output|
|--------|-----|------|
| Take max life expectancy in years for demographic| 80 | Max life: 80 (done)|
|Years convert to seconds| 1 (year) | 31536000 (seconds)(done)|
|Difference in years by seconds| 1980, 1981 | 31536000 (done)|
|Get Difference between birth year and current| 1990 | 28 (done)|
|Convert Earth age to Mercury Years(.24)| 28 | 6.72(done)|
|Convert Earth age to Venus years(.62)| 28 | 17.36 (done)|
|Convert Earth age to Mars years (1.88) | 28 | 52.64 (done)|
|Convert Earth age to Jupiter years(11.86) | 28| 332.08 (done)|
|Return if user has surpassed life expectancy| 80(cap), 90(planet age)| True (done)|
|Return  years lived past life expectancy| 100(cap), 332.08(planet age)|(returns) 222.08(done)|
-----------------------------------
## Objectives
1. Specs were committed before any code (done)
2. Business logic is tested with Jasmine (done)
3. Karma is set up correctly (done)
4. Uses ES6 features(class,let,const)
5. Dependencies managed with npm (done)
6. App uses webpack, lint, bundle and process code (done)
7. Project is in portfolio-quality state
8. Required functionality in place by friday deadline (personal issues, not done on time)
9. Project demonstrates understanding of concepts
