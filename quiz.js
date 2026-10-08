(function () {
  "use strict";

  var form = document.getElementById("quiz-form");
  if (!form) {
    return;
  }

  var resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var questions = form.querySelectorAll(".question");
    var correctCount = 0;
    var total = questions.length;

    questions.forEach(function (fieldset) {
      var answer = fieldset.getAttribute("data-answer");
      var selected = fieldset.querySelector('input[type="radio"]:checked');
      if (selected && selected.value === answer) {
        correctCount++;
      }
    });

    var scoreText = "You scored " + correctCount + " out of " + total + ".";
    resultDiv.innerHTML = '<p class="score">' + scoreText + '</p>';
    resultDiv.hidden = false;
  });

  form.addEventListener("reset", function () {
    resultDiv.hidden = true;
    resultDiv.innerHTML = "";
  });
})();