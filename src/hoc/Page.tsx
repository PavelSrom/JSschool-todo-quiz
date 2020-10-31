import React from 'react'
import { useTheme } from '@material-ui/styles'
import { Theme } from '../utils/mui-theme'

type Props = {
  style?: React.CSSProperties
}

export const Page: React.FC<Props> = ({ children, style }) => {
  const theme = useTheme<Theme>()

  return (
    <div
      style={{
        ...style,
        minHeight: 'calc(100vh - 72px)',
        background: theme.color.lightblue,
      }}
    >
      {children}
    </div>
  )
}
