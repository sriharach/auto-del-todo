import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './scss/global.scss'
import AppThemeProvider from './context/app-theme-provider'
import AutoDelTodo from './for-test/AutoDelTodo'
import { ThemeProvider } from 'styled-components'
import { theme } from './scss/styled-component-theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AutoDelTodo />
    </ThemeProvider>
  </React.StrictMode>,
)
