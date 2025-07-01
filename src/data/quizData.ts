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
  
  // New True/False questions
  { id: 51, question: 'Los megamurciélagos se alimentan principalmente de frutas.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 52, question: 'Los micromurciélagos usan solo la vista para cazar.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 53, question: 'Los murciélagos generan ultrasonidos en la laringe.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 54, question: 'Los murciélagos son animales diurnos.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 55, question: 'Los murciélagos hibernan durante el invierno.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 56, question: 'El corazón de la ballena azul es del tamaño de un auto pequeño.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 57, question: 'Los peces cartilaginosos tienen vejiga natatoria.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 58, question: 'Las lampreas tienen mandíbula.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Falso' },
  { id: 59, question: 'Los peces óseos tienen línea lateral.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },
  { id: 60, question: 'La lengua de la ballena azul pesa 4 toneladas.', type: 'true_false', options: ['Verdadero', 'Falso'], correctAnswer: 'Verdadero' },

  // New Fill in the blank questions
  { id: 61, question: 'Los murciélagos se dividen en dos grupos: ___ y ___.', type: 'fill_in', correctAnswer: ['megamurciélagos', 'micromurciélagos'] },
  { id: 62, question: 'El sistema de orientación por sonidos que usan los murciélagos se llama ___.', type: 'fill_in', correctAnswer: ['ecolocación'] },
  { id: 63, question: 'Los murciélagos emiten sonidos de alta frecuencia llamados ___.', type: 'fill_in', correctAnswer: ['ultrasonidos'] },
  { id: 64, question: 'Los murciélagos descansan durante el día en lugares como ___, ___ o ___.', type: 'fill_in', correctAnswer: ['cuevas', 'grietas', 'árboles'] },
  { id: 65, question: 'Los peces se clasifican en tres tipos: ___, ___ y ___.', type: 'fill_in', correctAnswer: ['óseos', 'cartilaginosos', 'lampreas'] },
  { id: 66, question: 'Los peces ___ no tienen escamas ni vejiga natatoria.', type: 'fill_in', correctAnswer: ['cartilaginosos'] },
  { id: 67, question: 'La ___ de la ballena azul puede medir hasta 35 metros.', type: 'fill_in', correctAnswer: ['longitud'] },
  { id: 68, question: 'Los cachalotes pueden bucear hasta ___ metros de profundidad.', type: 'fill_in', correctAnswer: ['2500'] },
  { id: 69, question: 'Las aves tienen sacos ___ que las hacen más ligeras para volar.', type: 'fill_in', correctAnswer: ['aéreos'] },
  { id: 70, question: 'El ___ del huevo sirve para que el pollito pueda respirar.', type: 'fill_in', correctAnswer: ['camisa de aire'] },

  // New Multiple choice questions
  { 
    id: 71, 
    question: '¿Qué tipo de murciélago usa principalmente la ecolocación?', 
    type: 'multiple_choice', 
    options: ['Megamurciélagos', 'Micromurciélagos', 'Ambos tipos'], 
    correctAnswer: 'Micromurciélagos' 
  },
  { 
    id: 72, 
    question: '¿Por qué los murciélagos son nocturnos?', 
    type: 'multiple_choice', 
    options: ['Menos competencia por comida', 'Menos depredadores', 'Ambas son correctas'], 
    correctAnswer: 'Ambas son correctas' 
  },
  { 
    id: 73, 
    question: '¿Qué parte del cuerpo del murciélago forma sus alas?', 
    type: 'multiple_choice', 
    options: ['Plumas', 'Membrana entre los dedos', 'Escamas'], 
    correctAnswer: 'Membrana entre los dedos' 
  },
  { 
    id: 74, 
    question: '¿Qué tipo de pez no tiene escamas?', 
    type: 'multiple_choice', 
    options: ['Óseo', 'Cartilaginoso', 'Ambos tipos'], 
    correctAnswer: 'Cartilaginoso' 
  },
  { 
    id: 75, 
    question: '¿Qué animal puede vivir más de 100 años?', 
    type: 'multiple_choice', 
    options: ['Ballena', 'Murciélago', 'Tiburón'], 
    correctAnswer: 'Ballena' 
  },
  { 
    id: 76, 
    question: '¿Qué estructura ayuda a los peces a mantenerse a flote?', 
    type: 'multiple_choice', 
    options: ['Vejiga natatoria', 'Línea lateral', 'Aletas'], 
    correctAnswer: 'Vejiga natatoria' 
  },
  { 
    id: 77, 
    question: '¿Qué parte del huevo alimenta al embrión?', 
    type: 'multiple_choice', 
    options: ['Yema y clara', 'Solo yema', 'Solo clara'], 
    correctAnswer: 'Yema y clara' 
  },
  { 
    id: 78, 
    question: '¿Qué tipo de ave tiene pico corto y fuerte?', 
    type: 'multiple_choice', 
    options: ['Granívora', 'Insectívora', 'Piscívora'], 
    correctAnswer: 'Granívora' 
  },
  { 
    id: 79, 
    question: '¿Qué característica tienen los huesos de las aves?', 
    type: 'multiple_choice', 
    options: ['Son muy pesados', 'Son huecos', 'Tienen médula'], 
    correctAnswer: 'Son huecos' 
  },
  { 
    id: 80, 
    question: '¿Qué tipo de murciélago se alimenta de sangre?', 
    type: 'multiple_choice', 
    options: ['Megamurciélago', 'Micromurciélago', 'Vampiro'], 
    correctAnswer: 'Vampiro' 
  },
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
