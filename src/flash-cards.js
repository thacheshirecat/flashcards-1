//business logic
import $ from 'jquery';

const Question = [
  "What does JS stand for?",
  "How do we define variables in Node that may change?",
  "How do we define variables in Node that will not change?"
];
const Answer = [
  "JavaScript",
  "let",
  "const"
];

export class Flashcards
{
  constructor(question, answer, maxTurns = 3, output, turnCount = 0, score = 0)
  {
    this.question = question;
    this.answer = answer;
    this.maxTurns = maxTurns;
    this.output = output;
    this.turnCount = turnCount;
    this.score = score;
  }
  setQuestion()
  {
    let i = this.turnCount;
    this.question = Question[i];
    this.answer = Answer[i];
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
      $("#answer").show();
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
