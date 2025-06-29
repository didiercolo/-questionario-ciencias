import { useState, useEffect } from 'react';
import { getRandomQuestions } from './data/quizData';
import type { Question } from './data/quizData';
import { QuizIntro, QuizQuestion, QuizResults } from './components';

const QUESTIONS_PER_QUIZ = 25;

type QuizStatus = 'intro' | 'in_progress' | 'completed';

type Answer = {
  questionId: number;
  answer: string | string[];
  isCorrect: boolean;
};

function App() {
  const [quizStatus, setQuizStatus] = useState<QuizStatus>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           (!localStorage.getItem('darkMode') && 
            window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const startQuiz = () => {
    const selectedQuestions = getRandomQuestions(QUESTIONS_PER_QUIZ);
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScore(0);
    setQuizStatus('in_progress');
    setQuizStarted(true);
  };

  const handleAnswer = (answer: string | string[]) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = Array.isArray(answer)
      ? answer.every((ans, i) => ans.toLowerCase() === (currentQuestion.correctAnswer as string[])[i]?.toLowerCase())
      : answer === currentQuestion.correctAnswer;

    const newAnswer = {
      questionId: currentQuestion.id,
      answer,
      isCorrect,
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizStatus('completed');
    }
  };

  const restartQuiz = () => {
    setQuizStatus('intro');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            Cuestionario de Ciencias
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
          {quizStatus === 'intro' && (
            <QuizIntro onStartQuiz={startQuiz} hasCompletedQuiz={quizStarted} />
          )}

          {quizStatus === 'in_progress' && questions.length > 0 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">
                  Pregunta {currentQuestionIndex + 1} de {questions.length}
                </span>
                <div className="bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full text-sm font-medium text-primary-800 dark:text-primary-200">
                  Puntuación: {score}
                </div>
              </div>
              <QuizQuestion
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
            </div>
          )}

          {quizStatus === 'completed' && (
            <QuizResults
              questions={questions}
              answers={answers}
              score={score}
              onRestart={restartQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
