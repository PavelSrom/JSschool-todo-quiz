import React from 'react'
import { Button, Text, Progress, useToast } from '@chakra-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Page } from '../hoc/Page'
import { useQuiz } from '../utils/hooks'
import { Theme } from '../utils/mui-theme'

const useStyles = makeStyles<Theme>(() => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const QuizPage: React.FC = () => {
  const classes = useStyles()
  const toast = useToast()

  const {
    currQuestion,
    numOfCorrect,
    quiz,
    quizStatus,
    startQuiz,
    resetQuiz,
    answerQuestion,
    nextStep,
  } = useQuiz()

  return (
    <Page style={{ display: 'flex' }}>
      <div className={classes.container}>
        {quizStatus === 'idle' ? (
          <>
            <Text fontSize="5xl">Ready to start quiz?</Text>
            <Button
              onClick={() => startQuiz()}
              variant="solid"
              variantColor="green"
              style={{ marginTop: 16 }}
            >
              Start
            </Button>
          </>
        ) : quizStatus === 'running' ? (
          <>
            <div style={{ minWidth: 960, margin: '0 auto', marginBottom: 128 }}>
              <Progress
                value={((currQuestion + 1) / quiz.length) * 100}
                color="green"
                backgroundColor="white"
              />
            </div>

            <Text fontSize="5xl">{quiz[currQuestion].question}</Text>

            <div style={{ display: 'flex', marginTop: 16 }}>
              {quiz[currQuestion].possibleAnswers.map(answer => (
                <Button
                  isDisabled={!!quiz[currQuestion].userAnswer}
                  style={{ margin: 8 }}
                  key={answer}
                  variant="solid"
                  variantColor={
                    quiz[currQuestion].userAnswer &&
                    answer === quiz[currQuestion].correctAnswer
                      ? 'green'
                      : 'cyan'
                  }
                  onClick={() => {
                    const answerIsCorrect = answer === quiz[currQuestion].correctAnswer

                    if (!quiz[currQuestion].userAnswer) {
                      answerQuestion(answer)

                      toast({
                        description: answerIsCorrect
                          ? 'Well done!'
                          : 'Oops, better luck next time!',
                        status: answerIsCorrect ? 'success' : 'error',
                        duration: 3000,
                      })
                    }
                  }}
                >
                  {answer}
                </Button>
              ))}
            </div>

            <Button
              isDisabled={!quiz[currQuestion].userAnswer}
              onClick={() => nextStep()}
              variant="solid"
              variantColor="green"
              style={{ marginTop: 64 }}
            >
              Next
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="5xl">Quiz is done!</Text>
            <Text fontSize="xl">
              You correctly answered {numOfCorrect} out of {quiz.length} questions
            </Text>
            <Button
              onClick={() => resetQuiz()}
              variant="solid"
              variantColor="green"
              style={{ marginTop: 64 }}
            >
              Try again
            </Button>
          </>
        )}
      </div>
    </Page>
  )
}
