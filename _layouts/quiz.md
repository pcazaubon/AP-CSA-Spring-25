---
title: "Quiz"
layout: default
---

# Quiz: Java Basics

**Question 1: Which of the following is a `for` loop?**

<form id="quiz-form">
  <input type="radio" name="q1" value="a"> `while (i < 10) {...}`<br>
  <input type="radio" name="q1" value="b"> `for (int i = 0; i < 10; i++) {...}`<br>
  <input type="radio" name="q1" value="c"> `if (i < 10) {...}`<br>
  <button type="button" onclick="checkAnswer()">Submit</button>
</form>

<p id="quiz-result"></p>

<script>
  function checkAnswer() {
    const answer = document.querySelector('input[name="q1"]:checked').value;
    const result = document.getElementById("quiz-result");
    if (answer === "b") {
      result.textContent = "Correct!";
    } else {
      result.textContent = "Try again!";
    }
  }
</script>
