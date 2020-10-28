import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles'
import { theme as muiTheme } from './utils/mui-theme'
import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  theme as chakraTheme,
} from '@chakra-ui/core'
import './index.css'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <MUIThemeProvider theme={muiTheme}>
      <ChakraThemeProvider theme={chakraTheme}>
        <CSSReset />
        <App />
      </ChakraThemeProvider>
    </MUIThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
