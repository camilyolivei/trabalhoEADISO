/**
 * ARQUIVO: script.js
 * DESCRIÇÃO: Lógica principal do quiz interativo com melhorias de UX/UI
 */

// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

let currentQuestion = 0;
let userAnswers = null;
let quizStarted = false;

// Elementos do DOM
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const percentageText = document.getElementById('percentageText');
const questionText = document.getElementById('questionText');
const optionsWrapper = document.getElementById('optionsWrapper');
const scorePercentage = document.getElementById('scorePercentage');
const scoreCount = document.getElementById('scoreCount');
const scoreMessage = document.getElementById('scoreMessage');
const resultsWrapper = document.getElementById('resultsWrapper');

// ========================================
// INICIALIZAÇÃO
// ========================================

function initializeEventListeners() {
  startBtn.addEventListener('click', startQuiz);
  prevBtn.addEventListener('click', previousQuestion);
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);
}

function startQuiz() {
  quizStarted = true;
  currentQuestion = 0;
  if (userAnswers === null) {
    userAnswers = new Array(questions.length).fill(null);
  }
  
  showScreen('quiz');
  loadQuestion();
}

function restartQuiz() {
  quizStarted = false;
  currentQuestion = 0;
  userAnswers = new Array(questions.length).fill(null);
  showScreen('start');
}

// ========================================
// GERENCIAMENTO DE TELAS
// ========================================

function showScreen(screenName) {
  // Oculta todas as telas
  startScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  resultsScreen.classList.remove('active');
  
  let target;
  switch(screenName) {
    case 'start': target = startScreen; break;
    case 'quiz': target = quizScreen; break;
    case 'results': target = resultsScreen; break;
  }
  
  if (target) {
    target.classList.add('active');
    // Scroll suave para o topo da seção do quiz
    document.querySelector('.quiz_section').scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ========================================
// CARREGAMENTO E EXIBIÇÃO DE PERGUNTAS
// ========================================

function loadQuestion() {
  const question = questions[currentQuestion];
  
  // Atualiza o texto da pergunta
  questionText.textContent = question.question;
  
  // Limpa as opções anteriores
  optionsWrapper.innerHTML = '';
  
  // Cria as opções de resposta
  question.options.forEach((option, index) => {
    const optionDiv = createOptionElement(option, index);
    optionsWrapper.appendChild(optionDiv);
  });
  
  // Se o usuário já respondeu essa pergunta, marca a resposta anterior
  if (userAnswers[currentQuestion] !== null) {
    const selectedOption = optionsWrapper.children[userAnswers[currentQuestion]];
    if (selectedOption) {
      selectedOption.classList.add('selected');
    }
  }
  
  updateProgress();
  updateNavigationButtons();
}

function createOptionElement(option, index) {
  const optionDiv = document.createElement('div');
  optionDiv.className = 'option';
  
  const circle = document.createElement('div');
  circle.className = 'option_circle';
  
  const text = document.createElement('span');
  text.textContent = option;
  
  optionDiv.appendChild(circle);
  optionDiv.appendChild(text);
  
  optionDiv.addEventListener('click', () => {
    // Remove a classe 'selected' de todas as opções
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Adiciona a classe 'selected' à opção clicada
    optionDiv.classList.add('selected');
    
    // Armazena a resposta do usuário
    userAnswers[currentQuestion] = index;
    
    // Habilita o botão próximo se estiver na última questão
    updateNavigationButtons();
  });
  
  return optionDiv;
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = progress + '%';
  progressText.textContent = `Questão ${currentQuestion + 1} de ${questions.length}`;
  percentageText.textContent = `${Math.round(progress)}% concluído`;
}

function updateNavigationButtons() {
  prevBtn.disabled = currentQuestion === 0;
  
  if (currentQuestion === questions.length - 1) {
    nextBtn.textContent = 'Finalizar Quiz';
  } else {
    nextBtn.textContent = 'Próxima';
  }
}

// ========================================
// NAVEGAÇÃO
// ========================================

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

// ========================================
// FINALIZAÇÃO E RESULTADOS
// ========================================

function finishQuiz() {
  showScreen('results');
  displayResults();
}

function displayResults() {
  let correctAnswers = 0;
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === questions[index].answer) {
      correctAnswers++;
    }
  });
  
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  
  scorePercentage.textContent = percentage + '%';
  scoreCount.textContent = correctAnswers;
  scoreMessage.textContent = getScoreMessage(percentage);
  
  displayAnswerReview();
}

function getScoreMessage(percentage) {
  if (percentage === 100) return 'Perfeito! Você domina completamente o tema!';
  if (percentage >= 80) return 'Excelente! Você tem um ótimo conhecimento.';
  if (percentage >= 60) return 'Bom! Você compreendeu bem os conceitos principais.';
  return 'Recomendamos revisar o conteúdo e refazer o quiz.';
}

function displayAnswerReview() {
  resultsWrapper.innerHTML = '';
  
  questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.answer;
    const isCorrect = userAnswer === correctAnswer;
    
    const resultItem = document.createElement('div');
    resultItem.className = `result_item ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const questionEl = document.createElement('div');
    questionEl.className = 'result_question';
    questionEl.textContent = `${index + 1}. ${question.question}`;
    
    const answerEl = document.createElement('div');
    answerEl.className = `result_answer ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
      answerEl.innerHTML = `Correta: ${question.options[correctAnswer]}`;
    } else {
      const userText = userAnswer !== null ? question.options[userAnswer] : 'Não respondida';
      answerEl.innerHTML = `Sua resposta: ${userText}<br>Correta: ${question.options[correctAnswer]}`;
    }
    
    resultItem.appendChild(questionEl);
    resultItem.appendChild(answerEl);
    resultsWrapper.appendChild(resultItem);
  });
}

// ========================================
// INICIALIZAÇÃO DO DOCUMENTO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  if (typeof questions !== 'undefined' && questions.length > 0) {
    userAnswers = new Array(questions.length).fill(null);
    initializeEventListeners();
  } else {
    console.error('Erro: Perguntas não carregadas.');
    alert('Erro ao carregar o quiz.');
  }
});
