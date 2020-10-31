export type TodoItem = {
  id?: string
  text: string
  important: boolean
}

export type QuizItem = {
  question: string
  possibleAnswers: string[]
  userAnswer: string
  correctAnswer: string
}
