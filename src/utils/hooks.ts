import { useState } from 'react'
import { initialQuiz } from './quiz-data'
import { QuizItem } from './types'

type QuizReturnType = {
  currQuestion: number
  quiz: QuizItem[]
  numOfCorrect: number
  quizStatus: 'idle' | 'running' | 'done'
  nextStep: () => void
  startQuiz: () => void
  resetQuiz: () => void
  answerQuestion: (userAnswer: string) => void
}

/**
 * I had 3 options how to do the quiz stuff:
 * 1) all logic in the component
 * 2) context
 * 3) custom hook
 *
 * I wanted to try the last option, just for fun, hooks are fun :)
 */
export const useQuiz = (): QuizReturnType => {
  const [quiz, setQuiz] = useState<QuizItem[]>(initialQuiz)
  const [currQuestion, setCurrQuestion] = useState<number>(0)
  const [numOfCorrect, setNumOfCorrect] = useState<number>(0)
  const [quizStatus, setQuizStatus] = useState<'idle' | 'running' | 'done'>('idle')

  // go to next question
  const nextStep = (): void => {
    if (currQuestion === quiz.length - 1) {
      const numOfCorrectAnswers = quiz.filter(
        ({ userAnswer, correctAnswer }) => userAnswer === correctAnswer
      ).length

      setNumOfCorrect(numOfCorrectAnswers)
      setQuizStatus('done')
    }

    setCurrQuestion(prev => prev + 1)
  }

  // start quiz
  const startQuiz = (): void => setQuizStatus('running')

  // reset quiz, hopefully I didn't forget to reset anything
  const resetQuiz = (): void => {
    setQuizStatus('idle')
    setQuiz(initialQuiz)
    setCurrQuestion(0)
    setNumOfCorrect(0)
  }

  // enter user answer
  const answerQuestion = (userAnswer: string): void => {
    setQuiz(prevQuiz => {
      const newQuiz = [...prevQuiz]
      newQuiz[currQuestion] = { ...newQuiz[currQuestion], userAnswer }

      return newQuiz
    })
  }

  return {
    currQuestion,
    numOfCorrect,
    quiz,
    quizStatus,
    nextStep,
    startQuiz,
    resetQuiz,
    answerQuestion,
  }
}
