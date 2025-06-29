import React, { useState, useEffect } from 'react';
import type { Question } from '../data/quizData';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string | string[]) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [fillInAnswers, setFillInAnswers] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    // Reset state when question changes
    setSelectedOption('');
    setFillInAnswers(
      Array.isArray(question.correctAnswer)
        ? new Array(question.correctAnswer.length).fill('')
        : []
    );
    setShowFeedback(false);
    setIsCorrect(null);
  }, [question]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleFillInChange = (index: number, value: string) => {
    const newFillInAnswers = [...fillInAnswers];
    newFillInAnswers[index] = value;
    setFillInAnswers(newFillInAnswers);
  };

  const handleSubmit = () => {
    if (question.type === 'fill_in') {
      const hasEmptyAnswers = fillInAnswers.some(answer => answer.trim() === '');
      if (hasEmptyAnswers) return;
      
      const correct = fillInAnswers.every(
        (answer, i) => answer.toLowerCase() === (question.correctAnswer as string[])[i].toLowerCase()
      );
      
      setIsCorrect(correct);
      setShowFeedback(true);
      
      setTimeout(() => {
        onAnswer([...fillInAnswers]);
      }, 1500);
    } else {
      if (!selectedOption) return;
      
      const correct = selectedOption === question.correctAnswer;
      setIsCorrect(correct);
      setShowFeedback(true);
      
      setTimeout(() => {
        onAnswer(selectedOption);
      }, 1500);
    }
  };

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'true_false':
        return (
          <div className="space-y-4">
            {question.options?.map((option) => (
              <button
                key={option}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedOption === option
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        );

      case 'multiple_choice':
        return (
          <div className="space-y-4">
            {question.options?.map((option) => (
              <button
                key={option}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedOption === option
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        );

      case 'fill_in':
        return (
          <div className="space-y-6">
            {question.question.split('___').map((part, index, array) => {
              if (index === array.length - 1) return <span key={index}>{part}</span>;
              
              return (
                <span key={index} className="inline-flex items-center">
                  {part}
                  <input
                    type="text"
                    className="mx-2 px-2 py-1 w-32 border-b-2 border-primary-500 bg-transparent focus:outline-none focus:border-primary-700"
                    value={fillInAnswers[index] || ''}
                    onChange={(e) => handleFillInChange(index, e.target.value)}
                    autoFocus={index === 0}
                  />
                </span>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  const isSubmitDisabled = 
    (question.type === 'fill_in' && fillInAnswers.some(a => !a.trim())) ||
    (!['fill_in'].includes(question.type) && !selectedOption);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Pregunta {questionNumber}
          </h3>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            {question.type === 'true_false' && 'Verdadero/Falso'}
            {question.type === 'multiple_choice' && 'Opción múltiple'}
            {question.type === 'fill_in' && 'Completar espacios'}
          </span>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            {question.type === 'fill_in' 
              ? question.question.replace(/___/g, '_____')
              : question.question}
          </p>
          
          {showFeedback ? (
            <div 
              className={`p-4 rounded-lg mb-6 ${
                isCorrect 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
              }`}
            >
              <p className="font-medium">
                {isCorrect ? '¡Correcto! 🎉' : 'Incorrecto. La respuesta correcta es:'}
              </p>
              {!isCorrect && (
                <p className="mt-1">
                  {Array.isArray(question.correctAnswer)
                    ? question.correctAnswer.join(', ')
                    : question.correctAnswer}
                </p>
              )}
            </div>
          ) : (
            renderQuestionContent()
          )}
        </div>

        {!showFeedback && (
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isSubmitDisabled
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
            >
              {questionNumber < totalQuestions ? 'Siguiente' : 'Finalizar'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
