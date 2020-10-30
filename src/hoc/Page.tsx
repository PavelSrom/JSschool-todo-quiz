import React from 'react'
import { useTheme } from '@material-ui/styles'
import { Theme } from '../utils/mui-theme'

export const Page: React.FC = ({ children }) => {
  const theme = useTheme<Theme>()

  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', background: theme.color.lightblue }}>
      {children}
    </div>
  )
}
