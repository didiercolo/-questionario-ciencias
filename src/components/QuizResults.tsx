import React from 'react';
import type { Question } from '../data/quizData';

interface Answer {
  questionId: number;
  answer: string | string[];
  isCorrect: boolean;
}

interface QuizResultsProps {
  questions: Question[];
  answers: Answer[];
  score: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  questions,
  answers,
  score,
  onRestart,
}) => {
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultEmoji = () => {
    if (percentage >= 90) return '🏆';
    if (percentage >= 70) return '🎉';
    if (percentage >= 50) return '👍';
    return '😢';
  };

  const getResultMessage = () => {
    if (percentage >= 90) return '¡Excelente trabajo! ¡Eres un experto en ciencias!';
    if (percentage >= 70) return '¡Buen trabajo! Sigue así para mejorar aún más.';
    if (percentage >= 50) return 'No está mal, pero hay margen de mejora.';
    return 'Sigue practicando, ¡seguro que la próxima vez lo harás mejor!';
  };

  const getAnswerText = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return answer.join(', ');
    }
    return answer;
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">{getResultEmoji()}</div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          ¡Cuestionario completado!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {getResultMessage()}
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 dark:text-gray-700"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-primary-500"
                strokeWidth="10"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                {percentage}%
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {score} de {totalQuestions} correctas
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Intentar de nuevo
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Revisión de respuestas
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {questions.map((question, index) => {
            const answer = answers.find(a => a.questionId === question.id);
            const isCorrect = answer?.isCorrect;
            
            return (
              <div key={question.id} className="p-6">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                    isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {isCorrect ? '✓' : '✗'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      Pregunta {index + 1}: {question.question}
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-24">
                          Tu respuesta:
                        </span>
                        <span className={`text-sm ${
                          isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          {answer ? getAnswerText(answer.answer) : 'Sin respuesta'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-24">
                            Respuesta correcta:
                          </span>
                          <span className="text-sm text-green-600 dark:text-green-400">
                            {Array.isArray(question.correctAnswer)
                              ? question.correctAnswer.join(', ')
                              : question.correctAnswer}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
