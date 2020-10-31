import React, { useState } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import { nanoid } from 'nanoid'
import { makeStyles } from '@material-ui/styles'
import {
  Box,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  Switch,
  useToast,
} from '@chakra-ui/core'
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

const initialValues: TodoItem = {
  text: '',
  important: false,
}

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [searchedTodos, setSearchedTodos] = useState<TodoItem[]>([])
  const [search, setSearch] = useState<string>('')
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false)
  const classes = useStyles()
  const toast = useToast()

  const handleSubmit = (
    newTodo: TodoItem,
    { resetForm }: FormikHelpers<TodoItem>
  ): void => {
    setTodos(prev => [...prev, { ...newTodo, id: nanoid() }])
    resetForm()
    toast({
      title: 'Todo added',
      description: 'Your todo has been added',
      status: 'success',
      duration: 4000,
    })
  }

  const deleteTodo = (todoId: string): void => {
    setTodos(prev => prev.filter(({ id }) => id !== todoId))
    toast({
      title: 'Todo deleted',
      description: 'Your todo has been deleted',
      status: 'success',
      duration: 4000,
    })
  }

  const searchTodos = (query: string): void => {
    setSearch(query)
    setSearchedTodos(
      todos.filter(({ text }) => text.toLowerCase().startsWith(query.toLowerCase()))
    )
  }

  return (
    <Page>
      <Box maxW="lg" className={classes.page}>
        <Stack align="center" isInline style={{ marginBottom: 32 }}>
          <Text fontSize="xl">Add new</Text>
          <Switch
            isChecked={isSearchMode}
            onChange={e => {
              // @ts-ignore
              setIsSearchMode(e.target.checked)
              setSearchedTodos(todos)
            }}
          />
          <Text fontSize="xl">Search</Text>
        </Stack>

        {isSearchMode ? (
          <Input
            isFullWidth
            value={search}
            placeholder="Search todos..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              searchTodos(e.target.value)
            }
          />
        ) : (
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values }) => (
              <Form>
                <Stack spacing={2}>
                  <Field
                    as={Input}
                    name="text"
                    placeholder="Todo text..."
                    isFullWidth
                    isRequired
                  />
                  <Field as={Checkbox} name="important" isChecked={values.important}>
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
            )}
          </Formik>
        )}

        <TodoList
          isSearchMode={isSearchMode}
          todos={todos}
          searchedTodos={searchedTodos}
          onDelete={deleteTodo}
        />
      </Box>
    </Page>
  )
}
