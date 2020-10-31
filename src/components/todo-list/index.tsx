import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { List, Text, Badge, ListItem, IconButton, Tooltip } from '@chakra-ui/core'
import { TodoItem } from '../../utils/types'
import { Theme } from '../../utils/mui-theme'

const useStyles = makeStyles<Theme>(theme => ({
  listItem: {
    background: '#fff',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
}))

type Props = {
  todos: TodoItem[]
  searchedTodos: TodoItem[]
  isSearchMode: boolean
  onDelete: (id: string) => void
}

export const TodoList: React.FC<Props> = ({
  todos,
  searchedTodos,
  isSearchMode,
  onDelete,
}) => {
  const classes = useStyles()

  const todosToRender = isSearchMode ? searchedTodos : todos

  return (
    <div>
      <Text fontSize="2xl" style={{ textAlign: 'center' }}>
        Your todos:
      </Text>

      <List>
        {todosToRender.map(({ id, text, important }) => (
          <ListItem key={id} className={classes.listItem}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Text>{text}</Text>
                {important && <Badge variantColor="red">Important</Badge>}
              </div>

              <Tooltip label="Delete todo" aria-label="">
                <IconButton
                  aria-label=""
                  icon="delete"
                  color="red.500"
                  onClick={() => onDelete(id!)}
                />
              </Tooltip>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
