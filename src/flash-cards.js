//business logic
import $ from 'jquery';

const Question = [
  "What does JS stand for?",
  "Second Question",
  "Third Question"
];
const Answer = [
  "JavaScript",
  "Second Answer",
  "Third Answer"
];

export class Flashcards
{
  constructor(question, answer, falseAnswer, output, turnCount = 0, score = 0)
  {
    this.question = question;
    this.answer = answer;
    this.falseAnswer = falseAnswer;
    this.output = output;
    this.turnCount = turnCount;
    this.score = score;
  }
  setQuestion()
  {
    let i = this.turnCount;
    this.question = Question[i];
    this.answer = Answer[i];
    this.falseAnswer = Answer[i+1];
    $("#question").text(this.question);
  }
  getAnswer()
  {
    $("#answer-form").trigger("submit");
  }
  checkAnswer(userInput)
  {
    if(userInput == this.answer)
    {
      this.score+=1;
      this.output = "Correct!";
      $("#question").text(this.answer);
      $("#answer").text(this.output);
    }
    else
    {
      this.score-=1;
      this.output = "Incorrect!";
      $("#question").text(this.answer);
      $("#answer").text(this.output);
    }
  }
}
