//logic for user interface

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Flashcards } from './flash-cards.js';

$(document).ready(function()
{
  let newGame = new Flashcards();
  let userInput = "";

  $("form#answer-form").submit(function(event)
  {
    event.preventDefault();
    userInput = $("#user-input").val();
  });

  $("button#play-button").click(function(event)
  {
    event.preventDefault();
    $("#play").hide();
    $("#question-answer-space").show();
    newGame.setQuestion();
    setTimeout(function()
    {
      newGame.getAnswer();
    }, 6900);
    setTimeout(function()
    {
      newGame.checkAnswer(userInput)
    }, 7000);
    setTimeout(function()
    {
      $("#next-card-button").show();
      newGame.turnCount += 1;
      $("#scorespan").text(newGame.score);
    }, 7500);
  });

  $("button#next-card").click(function(event)
  {
    event.preventDefault();
    $("#answer").hide();
    $("#next-card-button").hide();

    newGame.setQuestion();
    setTimeout(function()
    {
      newGame.getAnswer();
    }, 6900);
    setTimeout(function()
    {
      newGame.checkAnswer(userInput)
    }, 7000);
    setTimeout(function()
    {
      newGame.turnCount += 1;
      $("#scorespan").text(newGame.score);
    }, 7500);
    if((newGame.maxTurns - 1) > newGame.turnCount)
    {
      setTimeout(function()
      {
        $("#next-card-button").show()
      }, 7500);
    }
  });

});
