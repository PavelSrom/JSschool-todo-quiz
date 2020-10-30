import React, { useState } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { nanoid } from 'nanoid'
import { makeStyles } from '@material-ui/styles'
import { Box, Input, Checkbox, Stack, Button, useToast } from '@chakra-ui/core'
import { Theme } from '../utils/mui-theme'
import { Page } from '../hoc/Page'
import { TodoItem } from '../utils/types'
import { TodoList } from '../components/todo-list'

const useStyles = makeStyles<Theme>(theme => ({
  page: {
    padding: theme.spacing(4),
    background: theme.color.lightgray,
    margin: '0 auto',
  },
}))

const validationSchema = Yup.object().shape({
  text: Yup.string().required('This field is required'),
  important: Yup.boolean().required('This field is required'),
})

const initialValues: TodoItem = {
  text: '',
  important: false,
}

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const classes = useStyles()
  const toast = useToast()

  const handleSubmit = (
    newTodo: TodoItem,
    { resetForm }: FormikHelpers<TodoItem>
  ): void => {
    console.log(newTodo)
    setTodos(prev => [...prev, { ...newTodo, id: nanoid() }])
    resetForm()
    toast({
      title: 'Todo added',
      description: 'Your todo has been added',
      status: 'success',
      duration: 4000,
    })
  }

  // eslint-disable-next-line
  const updateTodo = (todoToUpdate: TodoItem): void => {}

  const deleteTodo = (todoId: string): void => {
    setTodos(prev => prev.filter(({ id }) => id !== todoId))
    toast({
      title: 'Todo deleted',
      description: 'Your todo has been deleted',
      status: 'success',
      duration: 4000,
    })
  }

  return (
    <Page>
      <Box maxW="lg" className={classes.page}>
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Stack spacing={2}>
              <Field
                as={Input}
                name="text"
                placeholder="Todo text..."
                isFullWidth
                isRequired
              />
              <Field as={Checkbox} name="important">
                Important
              </Field>

              <Button
                style={{ marginTop: 32 }}
                type="submit"
                variant="solid"
                variantColor="blue"
              >
                Add todo
              </Button>
            </Stack>
          </Form>
        </Formik>

        <TodoList todos={todos} onDelete={deleteTodo} />
      </Box>
    </Page>
  )
}
