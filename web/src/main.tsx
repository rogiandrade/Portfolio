import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeProvider } from './contexts/colorsProvider.tsx'
import App from './App.tsx'
import { HeaderProvider } from './contexts/headerProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
