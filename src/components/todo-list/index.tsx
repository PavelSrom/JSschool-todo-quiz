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
  onDelete: (id: string) => void
}

export const TodoList: React.FC<Props> = ({ todos, onDelete }) => {
  const classes = useStyles()

  return (
    <div>
      <h1>Todos:</h1>

      <List>
        {todos.map(({ id, text, important }) => (
          <ListItem key={id} className={classes.listItem}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Text>{text}</Text>
                {important && <Badge variantColor="red">Important</Badge>}
              </div>

              <div style={{ display: 'flex' }}>
                <Tooltip label="Update todo" aria-label="">
                  <IconButton
                    aria-label=""
                    icon="edit"
                    color="green.500"
                    style={{ marginRight: 8 }}
                  />
                </Tooltip>
                <Tooltip label="Delete todo" aria-label="">
                  <IconButton
                    aria-label=""
                    icon="delete"
                    color="red.500"
                    onClick={() => onDelete(id!)}
                  />
                </Tooltip>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
