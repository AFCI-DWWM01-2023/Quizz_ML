const questions = [
    {
      question: "Dans quelle série les personnages principaux sont Dean et Sam Winchester ?",
      choices: ["Breaking Bad", "Supernatural", "Stranger Things", "Friends"],
      correctAnswers: ["Supernatural"]
    },
    {
      question: "Quelle série se déroule à Hawkins ?",
      choices: ["The Walking Dead", "Stranger Things", "Black Mirror", "Westworld"],
      correctAnswers: ["Stranger Things"]
    },
    {
      question: "Qui siège sur le Trône de Fer dans Game of Thrones ?",
      choices: ["Jon Snow", "Daenerys Targaryen", "Cersei Lannister", "Personne"],
      correctAnswers: ["Personne"]
    },
    {
        question: "Par qui à était créer la série The Big Bang Theory ?",
        choices: ["Chuck Lorre", "Bill Prady", "Steven Molaro", "Christopher Lloyd II"],
        correctAnswers: ["Chuck Lorre","Bill Prady"]
    }
  ];
  
  const questionElement = document.getElementById('question');
  const choicesForm = document.getElementById('choices-form');
  const nextButton = document.getElementById('next-btn');
  const scoreElement = document.getElementById('score');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Affiche la question actuelle et les choix
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesForm.reset();
  
    const choiceLabels = choicesForm.getElementsByTagName('label');
    for (let i = 0; i < choiceLabels.length; i++) {
      const choiceLabel = choiceLabels[i];
      const choiceInput = choiceLabel.querySelector('input');
      const choiceText = choiceLabel.querySelector('span');
      choiceText.textContent = currentQuestion.choices[i];
      choiceInput.value = currentQuestion.choices[i];
    }
  }
  
  // Vérifie les réponses sélectionnées
  function checkAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswers = Array.from(choicesForm.querySelectorAll('input:checked')).map(input => input.value);
    const correctAnswers = currentQuestion.correctAnswers;
  
    const isCorrect = selectedAnswers.every(answer => correctAnswers.includes(answer));
  
    if (isCorrect) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  // Affiche le score final
  function showScore() {
    questionElement.textContent = "Quiz terminé !";
    choicesForm.style.display = "none";
    scoreElement.textContent = "Score : " + score + " sur " + questions.length;
    nextButton.style.display = "none";
  }
  
  // Écouteur d'événement pour le bouton suivant
  nextButton.addEventListener('click', checkAnswers);
  
  // Début du quiz en affichant la première question
  showQuestion();
  