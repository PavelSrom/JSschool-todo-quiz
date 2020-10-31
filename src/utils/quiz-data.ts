import { QuizItem } from './types'

export const initialQuiz: QuizItem[] = [
  {
    question: "What is Pavel's favorite framework / library?",
    correctAnswer: 'React',
    possibleAnswers: ['Angular', 'School library', 'React', 'Flask'],
    userAnswer: '',
  },
  {
    question: 'When did Pavel start learning React?',
    correctAnswer: 'July 2019',
    possibleAnswers: ['July 2019', 'July 2020', 'He was born with it', 'January 2019'],
    userAnswer: '',
  },
  {
    question: 'Why does Pavel use TypeScript instead of JavaScript?',
    correctAnswer: 'To write bug-free code',
    possibleAnswers: [
      'To brag about it',
      'Because it\'s the "hot" stuff now',
      'Just for fun, YOLO',
      'To write bug-free code',
    ],
    userAnswer: '',
  },
  {
    question: "What is Pavel's favorite design system for React?",
    correctAnswer: 'Material UI',
    possibleAnswers: [
      'Chakra UI',
      'Material UI',
      'Ant Design',
      'None because all of them suck',
    ],
    userAnswer: '',
  },
  {
    question: 'What new tool is Pavel currently learning?',
    correctAnswer: 'TypeORM',
    possibleAnswers: ['Redux', 'TypeORM', 'Next.js', 'React Query'],
    userAnswer: '',
  },
  {
    question: 'What new language is Pavel currently learning?',
    correctAnswer: 'Danish',
    possibleAnswers: ['French', 'PHP', 'Danish', 'Java'],
    userAnswer: '',
  },
]
