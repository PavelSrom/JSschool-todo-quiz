import React from 'react'
import { Button, Text, Progress } from '@chakra-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Page } from '../hoc/Page'
import { useQuiz } from '../utils/hooks'
import { Theme } from '../utils/mui-theme'

const useStyles = makeStyles<Theme>(theme => ({
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

  // useEffect(() => {
  //   console.log(quiz)
  // }, [quiz])

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
                  style={{ margin: 8 }}
                  key={answer}
                  variant={answer === quiz[currQuestion].userAnswer ? 'solid' : 'outline'}
                  variantColor="orange"
                  onClick={() => answerQuestion(answer)}
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
