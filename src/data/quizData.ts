export interface Question {
  id: number;
  question: string;
  type: 'true_false' | 'multiple_choice' | 'fill_in';
  options?: string[];
  correctAnswer: string | string[];
}

export const quizData: Question[] = [
  // True/False Questions
  { id: 1, question: 'Los vertebrados tienen columna vertebral.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 2, question: 'Los mamíferos tienen cuatro extremidades.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 3, question: 'Las aves tienen dientes.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 4, question: 'Los peces respiran por pulmones.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 5, question: 'Los murciélagos son mamíferos.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 6, question: 'El tiburón es un pez cartilaginoso.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 7, question: 'Las ballenas tienen una capa de grasa para protegerse del frío.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 8, question: 'Los delfines usan ecolocación para orientarse.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 9, question: 'Los peces tienen escamas.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 10, question: 'Los herbívoros tienen grandes colmillos para desgarrar carne.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 11, question: 'El huevo de la gallina tiene una cáscara dura y resistente.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 12, question: 'El embrión es la parte que se convierte en pollito.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 13, question: 'Los murciélagos comen solo frutas.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 14, question: 'La ballena azul es el animal más grande.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 15, question: 'Las aves incuban sus huevos.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 16, question: 'Los peces tienen vejiga natatoria.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 17, question: 'Los carnívoros tienen molares grandes para cortar hierba.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 18, question: 'Los tiburones pueden oler gotas de sangre.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 19, question: 'La chalaza sujeta la yema del huevo.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 20, question: 'Los murciélagos usan ecolocación.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  
  // Fill in the blank questions
  { id: 21, question: 'Los vertebrados tienen un ___ interno llamado columna ___.', type: 'fill_in', correctAnswer: ['esqueleto', 'vertebral'] },
  { id: 22, question: 'Los mamíferos respiran por ___.', type: 'fill_in', correctAnswer: ['pulmones'] },
  { id: 23, question: 'Las aves tienen ___ que mantienen su cuerpo caliente.', type: 'fill_in', correctAnswer: ['plumas'] },
  { id: 24, question: 'Los peces respiran por ___.', type: 'fill_in', correctAnswer: ['branquias'] },
  { id: 25, question: 'La ___ sujeta la yema dentro del huevo.', type: 'fill_in', correctAnswer: ['chalaza'] },
  { id: 26, question: 'La ___ es transparente y viscosa y alimenta al embrión.', type: 'fill_in', correctAnswer: ['clara'] },
  { id: 27, question: 'La ___ es dura y resistente, cubre el huevo.', type: 'fill_in', correctAnswer: ['cáscara'] },
  { id: 28, question: 'Los ___ tienen caninos grandes para desgarrar carne.', type: 'fill_in', correctAnswer: ['carnívoros'] },
  { id: 29, question: 'Los ___ tienen molares grandes para triturar plantas.', type: 'fill_in', correctAnswer: ['herbívoros'] },
  { id: 30, question: 'Los ___ pueden comer tanto carne como plantas.', type: 'fill_in', correctAnswer: ['omnívoros'] },
  { id: 31, question: 'Las aves tienen ___ extremidades: alas y patas.', type: 'fill_in', correctAnswer: ['cuatro'] },
  { id: 32, question: 'Los ___ son el único mamífero que puede volar.', type: 'fill_in', correctAnswer: ['murciélagos'] },
  { id: 33, question: 'Los tiburones tienen una ___ dentadura.', type: 'fill_in', correctAnswer: ['afilada'] },
  { id: 34, question: 'Los ___ se orientan por ecolocación y pueden bucear profundo.', type: 'fill_in', correctAnswer: ['delfines'] },
  { id: 35, question: 'La ballena azul puede medir hasta ___ metros.', type: 'fill_in', correctAnswer: ['35'] },
  { id: 36, question: 'Las ___ son láminas duras en el cuerpo de los peces.', type: 'fill_in', correctAnswer: ['escamas'] },
  { id: 37, question: 'Los peces se dividen en ___ tipos principales.', type: 'fill_in', correctAnswer: ['tres'] },
  { id: 38, question: 'La ___ permite al pez mantenerse a flote.', type: 'fill_in', correctAnswer: ['vejiga natatoria'] },
  { id: 39, question: 'Los ___ tienen huesos huecos.', type: 'fill_in', correctAnswer: ['pájaros'] },
  { id: 40, question: 'Las ___ incuban sus huevos.', type: 'fill_in', correctAnswer: ['aves'] },
  
  // Multiple choice questions
  { 
    id: 41, 
    question: '¿Qué animal es el mamífero más grande?', 
    type: 'multiple_choice', 
    options: ['Delfín', 'Ballena azul', 'Murciélago'], 
    correctAnswer: 'Ballena azul' 
  },
  { 
    id: 42, 
    question: '¿Qué tienen los herbívoros para cortar hierba?', 
    type: 'multiple_choice', 
    options: ['Molares', 'Caninos', 'Picos'], 
    correctAnswer: 'Molares' 
  },
  { 
    id: 43, 
    question: '¿Qué animal usa ecolocación?', 
    type: 'multiple_choice', 
    options: ['Pez', 'Tiburón', 'Murciélago'], 
    correctAnswer: 'Murciélago' 
  },
  { 
    id: 44, 
    question: '¿Qué cubre la yema dentro del huevo?', 
    type: 'multiple_choice', 
    options: ['Chalaza', 'Clara', 'Cáscara'], 
    correctAnswer: 'Chalaza' 
  },
  { 
    id: 45, 
    question: '¿Qué respiración usan los peces?', 
    type: 'multiple_choice', 
    options: ['Pulmones', 'Branquias', 'Nariz'], 
    correctAnswer: 'Branquias' 
  },
  { 
    id: 46, 
    question: '¿Qué tienen los tiburones que detecta impulsos?', 
    type: 'multiple_choice', 
    options: ['Ampolla de Lorenzini', 'Chalaza', 'Cáscara'], 
    correctAnswer: 'Ampolla de Lorenzini' 
  },
  { 
    id: 47, 
    question: '¿Qué clase de mamífero puede volar?', 
    type: 'multiple_choice', 
    options: ['Delfín', 'Murciélago', 'Ballena'], 
    correctAnswer: 'Murciélago' 
  },
  { 
    id: 48, 
    question: '¿Qué parte del huevo es viscosa?', 
    type: 'multiple_choice', 
    options: ['Yema', 'Clara', 'Cáscara'], 
    correctAnswer: 'Clara' 
  },
  { 
    id: 49, 
    question: '¿Qué tipo de diente es para desgarrar carne?', 
    type: 'multiple_choice', 
    options: ['Incisivos', 'Molares', 'Caninos'], 
    correctAnswer: 'Caninos' 
  },
  { 
    id: 50, 
    question: '¿Cómo se reproducen las aves?', 
    type: 'multiple_choice', 
    options: ['Vivíparos', 'Ovíparos', 'Ovovivíparos'], 
    correctAnswer: 'Ovíparos' 
  },
];

export const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const getRandomQuestions = (count: number): Question[] => {
  return shuffleArray([...quizData]).slice(0, count);
};
