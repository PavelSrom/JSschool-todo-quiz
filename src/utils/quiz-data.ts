import { QuizItem } from './types'

export const initialQuiz: QuizItem[] = [
  {
    question: "What is Pavel's favorite color?",
    correctAnswer: 'Green',
    possibleAnswers: ['Blue', 'Black', 'Green', 'None, he is colorblind'],
    userAnswer: '',
  },
  {
    question: 'How old is Pavel?',
    correctAnswer: '22',
    possibleAnswers: ['21', '22', '40 but under a disguise', '24'],
    userAnswer: '',
  },
  {
    question: 'What does Pavel like the most about Denmark?',
    correctAnswer: 'The people',
    possibleAnswers: ['The beautiful weather', 'The language', 'SU', 'The people'],
    userAnswer: '',
  },
  {
    question: 'Where would Pavel like to go once corona is over?',
    correctAnswer: 'Sweden',
    possibleAnswers: ['Germany', 'Sweden', 'Home', 'Mars'],
    userAnswer: '',
  },
  {
    question: "Who is Pavel's secret celebrity crush?",
    correctAnswer: 'Jacinda Ardern',
    possibleAnswers: [
      'Jacinda Ardern',
      'Donald Trump',
      'Katy Perry',
      'Scarlett Johansson',
    ],
    userAnswer: '',
  },
  {
    question: 'What does Pavel hate the most about front-end dev?',
    correctAnswer: 'Making stuff look pretty',
    possibleAnswers: [
      'JavaScript / TypeScript',
      'Everything',
      'Fixing bugs',
      'Making stuff look pretty',
    ],
    userAnswer: '',
  },
]
