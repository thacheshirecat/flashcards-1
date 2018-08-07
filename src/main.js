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
  });
});
