import React from 'react';

interface QuizIntroProps {
  onStartQuiz: () => void;
  hasCompletedQuiz: boolean;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStartQuiz, hasCompletedQuiz }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {hasCompletedQuiz ? '¡Inténtalo de nuevo!' : '¡Bienvenido al Cuestionario de Ciencias!'}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {hasCompletedQuiz
          ? '¿Listo para mejorar tu puntuación? Responde 25 preguntas sobre animales vertebrados y su clasificación.'
          : 'Pon a prueba tus conocimientos sobre animales vertebrados y su clasificación. Responde 25 preguntas al azar.'}
      </p>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Preguntas de verdadero/falso</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Preguntas de completar espacios</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-purple-600 dark:text-purple-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Preguntas de opción múltiple</span>
        </div>
      </div>
      <button
        onClick={onStartQuiz}
        className="mt-8 w-full md:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        {hasCompletedQuiz ? 'Reintentar' : 'Comenzar el cuestionario'}
      </button>
    </div>
  );
};

export default QuizIntro;
